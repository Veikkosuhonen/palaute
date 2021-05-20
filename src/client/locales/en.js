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
    copy: 'Copy',
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
      'This feedback is currently closed. Feedback can be given between {{opensAt}} and {{closesAt}}',
    privacyInfoTitle: 'How is my information being used?',
    privacyInfoContent:
      'The user information is being used, for example, to show the student the correct feedback surveys, to send reminder messages, and to show the teacher which students have sent feedback (which information can be used for example in grading). Teachers will not be able to know which student has given certain feedback. The teacher can see a list of students who have given feedback once the feedback has been opened, but the feedback is only visible once the feedback is closed. If a course has five or fewer feedbacks, the feedback will not be visible at all',
    dontKnowOption: 'N/A',
    editSurvey: 'Edit survey',
    translationLanguage: 'Survey preview language',
    cannotSubmitText:
      'You cannot submit because you are not enrolled in this course',
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
      'WARNING! The survey cannot be edited after the feedback form opens',
    opensAtIsNow:
      'The survey is set to open immediately! When the survey is open it cannot be edited anymore. Are you sure you want to save the survey?',
    noUnsavedChanges: 'You do not have unsaved changes to submit',
  },
  questionResults: {
    answerCount: 'Answer count',
    answerOption: 'Answer option',
    publicInfo:
      'The results from these questions are visible to students. <2>Select public questions</2>',
    notPublicInfo:
      'The results from these questions are not visible to students. <2>Select public questions</2>',
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
    copyResponseLink: 'Copy link to response',
    copied: 'Link copied to clipboard',
    showStudentsWithFeedback: 'Show students who have given feedback',
    studentFeedbacks: 'feedbacks given',
    giveFeedbackResponse: 'Give counter feedback',
    noCourseRealisations: 'This course is not currently implemented',
    editFeedbackResponse: 'Edit counter feedback',
    selectPublicQuestions: 'Select public questions',
  },
  feedbackTargetResults: {
    notEnoughFeedbacksInfo:
      'Survey results will not be displayed because it does not have enough feedbacks',
    studentsWithFeedbackHeading: 'Students who have given feedback',
    responseHeading: "Teacher's counter feedback",
    giveResponse: 'Give counter feedback',
    editResponse: 'Edit counter feedback',
    noResponseInfo: "The course's teacher has not given counter feedback yet",
    exportCsv: 'Export as csv',
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
  feedbackResponse: {
    responseLabel: 'Counter feedback',
    responseInfo: 'This field supports <2>Markdown</2> content',
    previewLabel: 'Preview',
  },
  publicQuestions: {
    publicInfo:
      'Feedback related to public questions is visible to students on the <2>feedback page</2> once the feedback period has ended',
  },
  courseSummary: {
    heading: 'Summary of course feedback',
    noResults: 'No feedbacks',
  },
}
