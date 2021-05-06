/* eslint-disable max-len */

export default {
  common: {
    languages: {
      fi: 'Finnish',
      sv: 'Swedish',
      en: 'English',
    },
    validationErrors: {
      required: 'This field is required',
      wrongDate: 'Survey closing date is before opening date',
    },
    unknownError: 'Something went wrong',
    save: 'Save',
    saveSuccess: 'Information has been saved',
    name: 'Name',
    edit: 'Edit',
    show: 'Show',
    feedbackOpenPeriod:
      'Feedback can be given between {{opensAt}} and {{closesAt}}',
    firstName: 'First name',
    lastName: 'Last name',
    username: 'Username',
    studentNumber: 'Student number',
    dirtyFormPrompt:
      'The page has unsaved changes. Are you sure want to leave the page?',
    actions: 'Actions',
    close: 'Close',
    required: 'Required',
  },
  userFeedbacks: {
    mainHeading: 'My feedbacks',
    giveFeedbackButton: 'Give feedback',
    modifyFeedbackButton: 'Modify feedback',
    clearFeedbackButton: 'Clear feedback',
    clearConfirmationQuestion: 'Are you sure you want to clear this feedback?',
    yes: 'Yes',
    no: 'No',
    viewFeedbackSummary: 'View feedback summary',
    noFeedback: 'Nothing to see here. Come back later!',
    feedbackClosed: 'Feedback is closed',
    waitingForFeedback: 'Waiting for feedback',
    feedbackGiven: 'Feedback has been given',
  },
  feedbackView: {
    submitButton: 'Give feedback',
    successAlert: 'Feedback has been given',
    feedbackInfo:
      'This feedback is anonymous. Fields marked with an asterisk (*) are required',
    feedbackInfoLink: 'Read more, how your information is being used',
    closedInfo:
      'This feedback is currently closed. Feedback can be given between {{closesAt}} and {{opensAt}}',
    privacyInfoTitle: 'How is my information being used?',
    privacyInfoContent:
      'The user information is being used, for example, to show the student the correct feedback surveys, to send reminder messages, and to show the teacher which students have sent feedback (which information can be used for example in grading). Teachers will not be able to know which student has given certain feedback. The teacher can see a list of students who have given feedback once the feedback has been opened, but the feedback is only visible once the feedback is closed. If a course has five or fewer feedbacks, the feedback will not be visible at all',
    dontKnowOption: 'N/A',
    editSurvey: 'Edit survey',
    translationLanguage: 'Survey preview language',
  },
  teacherView: {
    noActiveCourses: 'No courses active',
    oldCourses: 'Show old courses',
    modifyForm: 'Modify form',
    viewFeedbackSummary: 'View feedback summary',
    viewFeedbackTargets: 'View feedback targets',
    sortBy: 'Sort by',
    courseName: 'Course name',
    courseCode: 'Course code',
    mainHeading: 'My courses',
  },
  questionEditor: {
    addQuestion: 'Add question',
    likertQuestion: 'Scale of values',
    openQuestion: 'Open question',
    singleChoiceQuestion: 'Single choice question',
    multipleChoiceQuestion: 'Multiple choice question',
    textualContent: 'Textual content',
    moveUp: 'Move up',
    moveDown: 'Move down',
    removeQuestion: 'Remove question',
    options: 'Options',
    option: 'Option',
    addOption: 'Add option',
    removeOption: 'Remove option',
    label: 'Question',
    content: 'Content',
    removeQuestionConfirmation:
      'Are you sure you want to remove this question?',
    removeOptionConfirmation: 'Are you sure you want to remove this option?',
    description: 'Description',
    done: 'Done',
    languageInfo:
      'Your are currently editing the "{{language}}" translation of this question',
    descriptionHelper:
      'Optional description that provides additional information about the question',
  },
  editFeedbackTarget: {
    closesAt: 'Closes at',
    opensAt: 'Opens at',
    hidden: 'Hidden',
    upperLevelQuestionsInfo:
      'Survey already has {{count}} university and department level questions, but you can add additional questions. You can click the "Show survey preview" button to see what the survey looks like with all the questions',
    showPreview: 'Show survey preview',
    translationLanguage: 'Translation language',
    warningAboutOpeningCourse:
      'WARNING! The form data cannot be edited after the feedback form opens',
  },
  questionResults: {
    answerCount: 'Answer count',
    answerOption: 'Answer option',
  },
  feedbackSummary: {
    question: 'Question',
    average: 'Average',
    standardDeviation: 'Standard Deviation',
    median: 'Median',
    answers: 'Answers',
  },
  feedbackTargetList: {
    showFeedbacks: 'Show feedbacks',
    showSurvey: 'Show survey',
    editSurvey: 'Edit survey',
    copyLink: 'Copy answer form link',
    copied: 'Link copied to cliboard',
    showStudentsWithFeedback: 'Show students who have given feedback',
    studentFeedbacks: 'feedbacks given',
  },
  feedbackTargetResults: {
    notEnoughFeedbacksInfo:
      'Survey results will not be displayed because it does not have enough feedbacks',
    studentsWithFeedbackHeading: 'Students who have given feedback',
  },
  navBar: {
    myFeedbacks: 'My feedbacks',
    myCourses: 'My courses',
    logOut: 'Log out',
    admin: 'Admin',
    nameFallback: 'Menu',
  },
  studentsWithFeedback: {
    noFeedbackInfo: 'No one has given feedback yet',
  },
}
