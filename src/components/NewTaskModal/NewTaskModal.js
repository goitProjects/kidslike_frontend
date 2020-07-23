/* eslint-disable */
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { validateAll } from 'indicative/validator';
import PropTypes from 'prop-types';
import imageRobot from '../../assets/images/imageRobot.png';
import { ReactComponent as Cancel } from '../../assets/icons/close/cancel.svg';
import { ReactComponent as Edit } from '../../assets/icons/icon edit/edit-24px.svg';
import style from './NewTaskModal.module.css';
import { NewTaskModalClosed } from '../../redux/global/globalActions';
import { createTaskOperation } from '../../redux/tasks/tasksOperations';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const validationRules = {
  title: 'max:20|required',
  taskPoints: 'number|integer|range:1,9|required',
};

const validationMessagesUa = {
  'title.required': "Це обов'язкове поле",
  'taskPoints.required': "Це обов'язкове поле",
  'title.max': 'не більше 20 символів',
  'taskPoints.range': 'має бути від 1 до 9 балів',
};

const validationMessagesRu = {
  'title.required': 'Это обязательное поле',
  'taskPoints.required': 'Это обязательное поле',
  'title.max': 'не более 20 символов',
  'taskPoints.range': 'должно быть от 1 до 9 баллов',
};

class NewTaskModal extends Component {
  overlayRef = createRef();

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    isShowLangRu: PropTypes.bool.isRequired,
  };

  state = {
    title: '',
    taskPoints: '',
    error: null,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { title, taskPoints } = this.state;

    const { isShowLangRu } = this.props;
    let validationMessages;
    !isShowLangRu
      ? (validationMessages = validationMessagesUa)
      : (validationMessages = validationMessagesRu);

    validateAll({ title, taskPoints }, validationRules, validationMessages)
      .then(data => {
        this.props.onSave(data);
        this.setState({ title: '', taskPoints: '', error: null });
        const { closeModal } = this.props;
        closeModal();
      })
      .catch(errors => {
        const formatedErrors = {};
        errors.forEach(error => {
          formatedErrors[error.field] = error.message;
        });
        this.setState({
          error: formatedErrors,
        });
      });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleKeyPress = e => {
    const { closeModal } = this.props;
    if (e.code !== 'Escape') return;
    closeModal();
  };

  handleBackdropClick = e => {
    const { closeModal } = this.props;
    const { current } = this.overlayRef;
    if (current && e.target !== current) {
      return;
    }
    closeModal();
  };

  render() {
    const { title, taskPoints, error } = this.state;
    const { closeModal, isShowLangRu } = this.props;

    return (
      <div
        onClick={this.handleBackdropClick}
        role="presentation"
        className={`${style.wrapper} ${style.overlay}`}
        ref={this.overlayRef}
      >
        <div className={style.taskModal}>
          <div className={style.taskImage}>
            <button type="button" className={style.taskCloseButton}>
              {' '}
              <Cancel onClick={closeModal} />{' '}
            </button>
            <img src={imageRobot} alt="robot" />
          </div>
          <div className={style.taskForm}>
            <form className={style.form} onSubmit={this.handleSubmit}>
              <label htmlFor="text" className={style.textSection}>
                <Edit className={style.taskIconEdit} />
                <input
                  className={style.taskInput}
                  placeholder={
                    !isShowLangRu ? 'Додати завдання...' : 'Добавить задание...'
                  }
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
                {error && (
                  <span className={`${style.titleError} ${style.error}`}>
                    {error.title}
                  </span>
                )}
              </label>
              <label htmlFor="number" className={style.pointsSection}>
                <Edit className={style.gradeIconEdit} />
                <input
                  className={style.taskPoints}
                  type="number"
                  value={taskPoints}
                  name="taskPoints"
                  placeholder={
                    !isShowLangRu ? 'Додати бали...' : 'Добавить баллы...'
                  }
                  onChange={this.handleChange}
                />
                {error && (
                  <span className={`${style.pointError} ${style.error}`}>
                    {error.taskPoints}
                  </span>
                )}
              </label>
              <button className={style.taskSubmitButton} type="submit">
                Ок
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isShowLangRu: getIsShowLengRu(state),
});

const mapDispatchProps = dispatch => ({
  onSave: data => dispatch(createTaskOperation(data)),
  closeModal: () => dispatch(NewTaskModalClosed()),
});

export default connect(mapStateToProps, mapDispatchProps)(NewTaskModal);
