/* eslint-disable max-len */

export default {
  common: {
    languages: {
      fi: 'Finska',
      sv: 'Svenska',
      en: 'Engelska',
    },
    validationErrors: {
      required: 'Fältet krävs',
      wrongDate: 'Förfrågans slutdatum är före startdatumet',
    },
    unknownError: 'Något gick fel',
    save: 'Spara',
    saveSuccess: 'Informationen har sparats',
    name: 'Namn',
    edit: 'Redigera',
    show: 'Visa',
    feedbackOpenPeriod: 'Respons kan ges mellan {{opensAt}} och {{closesAt}}',
    firstName: 'Förnamn',
    lastName: 'Efternamn',
    username: 'Användarnamn',
    studentNumber: 'Studentnummer',
    dirtyFormPrompt:
      'Sidan har osparade ändringar. Är du säker att du vill lämna sidan?',
    actions: 'Handlingar',
    close: 'Stäng',
    required: 'Krävs',
    copy: 'Kopiera',
  },
  userFeedbacks: {
    mainHeading: 'Mina responser',
    giveFeedbackButton: 'Ge respons',
    modifyFeedbackButton: 'Redigera responsen',
    clearFeedbackButton: 'Töm responsen',
    clearConfirmationQuestion:
      'Är du säker på att du vill tömma denna respons?',
    yes: 'Ja',
    no: 'Nej',
    viewFeedbackSummary: 'Visa sammanfattning av responsen',
    noFeedback: 'Ingenting här. Kom tillbaka senare!',
    feedbackClosedTab: 'Responsen är stängd',
    waitingForFeedbackTab: 'Väntar på respons',
    feedbackGivenTab: 'Responsen är given',
    feedbackGivenChip: 'Givna',
    waitingForFeedbackChip: 'Responsen saknas',
    feedbackNotStartedChip: 'Responsen har inte börjat',
    feedbackEndedChip: 'Responsen har avslutats',
  },
  feedbackView: {
    submitButton: 'Ge respons',
    successAlert: 'Responsen är given',
    feedbackInfo:
      'Denna respons är anonym. Fälten märkta med en asterisk (*) krävs',
    feedbackInfoLink: 'Läs mera om hur informationen och svar används',
    closedInfo:
      'Denna respons är för tillfället stängd. Responsen kan ges mellan {{opensAt}} och {{closesAt}}',
    dataProtectionNotice: 'Dataskyddsbeskrivning',
    dontKnowOption: 'Ingen uppgift',
    editSurvey: 'Redigera förfrågan',
    translationLanguage: 'Språket på förfrågans förhandsvisning',
    cannotSubmitText:
      'Du kan inte ge respons för att du har inte anmält dig eller så har din anmälning ännu inte uppdaterats i vårt system. Anmälningar uppdateras var 24:e timme.',
    feedbackClosedError: 'Responsen är stängd',
    endedInfo: 'Responsen är stängd. <2>Se på responserna</2>',
    editButton: 'Redigera respons',
    feedbackInfoTitle: 'Hur används mina svar och min information?',
    feedbackInfoContent:
      'Svaren används till att utveckla undervisningen och kursernas innehåll. Svar till kursresponsens frågor kan visas till andra studerande i kursen. Svaren behandlas och visas alltid anonymt. Läraren kan inte koppla responser till enskilda studerande. \n Inloggningsinformation används till att visa rätta responser till studerande.',
  },
  teacherView: {
    mainHeading: 'Mina kurser',
    showFeedbacks: 'Visa respons',
    showSurvey: 'Visa förfrågan',
    editSurvey: 'Redigera förfrågan',
    copyLink: 'Kopiera svar via länk',
    copyResponseLink: 'Kopiera länken till svaret på responsen',
    copied: 'Länk kopierat till urklippet',
    showStudentsWithFeedback: 'Visa studerandena som har givit respons',
    feedbackCount: '{{count}}/{{totalCount}} responser givna',
    giveFeedbackResponse: 'Ge svar på responsen',
    editFeedbackResponse: 'Redigera svar på responsen',
    noCourseRealisations: 'Inga kursinstanser',
    noCourses: 'Inga kurser',
    feedbackResponseGiven: 'Svar på responsen given',
    feedbackResponseMissing: 'Svar på responsen saknas',
    feedbackOpen: 'Responsen är öppen',
    ongoingCourses: 'Pågående kurser',
    upcomingCourses: 'Kommande kurser',
    endedCourses: 'Avslutade kurser',
    feedbackNotStarted: 'Tiden för respons har ännu inte börjat',
    surveyOpen: 'Tiden för att ge repons: {{opensAt}}-{{closesAt}}',
  },
  questionEditor: {
    addQuestion: 'Lägg till fråga',
    likertQuestion: 'Värderingsskala',
    openQuestion: 'Öppen fråga',
    singleChoiceQuestion: 'Envalsfråga',
    multipleChoiceQuestion: 'Flervalsfråga',
    textualContent: 'Textinnehåll',
    moveUp: 'Rör dig uppåt',
    moveDown: 'Rör dig nedåt',
    removeQuestion: 'Radera frågan',
    options: 'Alternativ',
    option: 'Alternativ',
    addOption: 'Lägg till alternativ',
    removeOption: 'Radera alternativ',
    label: 'Fråga',
    content: 'Innehåll',
    removeQuestionConfirmation: 'Är du säker, att du vill radera frågan?',
    removeOptionConfirmation: 'Är du säker, att du vill radera alternativet?',
    description: 'Beskrivning',
    done: 'Spara',
    languageInfo:
      'Då håller för tillfället på att redigera språkversionen "{{language}}" av frågan',
    descriptionHelper:
      'Frivillig beskrivning som förser frågan med tilläggsinformation',
    universityQuestion: 'Universitetsnivå',
    programmeQuestion: 'Utbildningsprogramsnivå',
    uneditableTooltip:
      'Detta är definierat på förhand och läggs till automatiskt i förfrågan och kan inte redigeras eller raderas',
    duplicate: 'Duplicera',
  },
  editFeedbackTarget: {
    closesAt: 'Stängs',
    opensAt: 'Öppnas',
    hidden: 'Gömd',
    upperLevelQuestionsInfo:
      'Förfrågan har redan {{count}} frågor på universitets- och avdelningsnivå, men du kan lägga till frågor. Du kan trycka på knappen "Visa förfrågans förhandsvisning" för att se hur förfrågan ser ut med alla frågorna',
    showPreview: 'Visa förfrågans förhandsvisning',
    translationLanguage: 'Språkversion',
    warningAboutOpeningCourse:
      'VARNING! Formulärets information kan inte ändras efter att föfrågan har öppnats',
    opensAtIsNow:
      'Förfrågan är inställd att öppnas genast! När förfrågan öppnas kan den inte längre redigeras',
    checkbox: 'Jag förstår',
    noUnsavedChanges: 'Inga osparade ändringar',
    openImmediately: 'Öppna responsen genast',
    openImmediatelyConfirm:
      'När responsen har öppnats kan förfrågan inte längre redigeras. Är du säker på att du vill öppna responsen?',
    upperLevelQuestionsInfoOne:
      'Förfrågan har redan {{count}} frågor på universitets- och avdelningsnivå ({{primaryOrganisation}}), men du kan lägga till frågor. Du kan trycka på knappen "Visa förfrågans förhandsvisning" för att se hur förfrågan ser ut med alla frågorna',
    upperLevelQuestionsInfoMany:
      'Förfrågan har redan {{count}} frågor på universitets- och avdelningsnivå, men du kan lägga till frågor. Du kan trycka på knappen "Visa förfrågans förhandsvisning" för att se hur förfrågan ser ut med alla frågorna.\n Frågor på avdelningsnivå kommer från primära organisationen, {{primaryOrganisation}}. Övriga organisationer är {{otherOrganisations}}.',
    copyFromCourseDialogTitle: 'Kopiera frågor från en annan kurs',
    copySuccessSnackbar: 'Frågorna har kopierats till förfrågan',
    copyQuestionsButton: 'Kopiera frågor',
    copyFromCourseButton: 'Kopiera frågor från en annan kurs',
    copyFromCourseInfoAlert:
      'Du kan kopiera frågor från de kurser du undervisar. Välj först kursen och sedan genomförningen vars frågor du vill kopiera',
    copyFromCourseChooseCourse: 'Välj kurs för att se dess genomförningar',
    copyFromCourseNoQuestions: 'Inga av kursens genomförningar har egna frågor',
    copyFromCourseQuestionCount: '{{count}} frågor',
    copyFromCourseSearchLabel: 'Kurs',
    openFeedbackImmediatelyDialogTitle: 'Varning!',
    openFeedbackImmediatelyDialogContent:
      'Du håller på att öppna kursresponsen. Observera att efter kursresponsens öppnande kan du inte längre redigera dess förfrågan, eller tiden för när den är öppen.',
    openFeedbackImmediatelyDialogCancel: 'Avbryt',
    openFeedbackImmediatelyDialogConfirm: 'Öppna respons',
    opensAtInPastError: 'Öppningsdatumet får inte vara i det förflutna',
    closesAtBeforeOpensAtError:
      'Stängningsdatumet måste vara efter öppningsdatumet',
    tooShortFeedbackPeriodError:
      'Responsen måste vara öppen åtminstone ett dygn',
  },
  questionResults: {
    answerCount: 'Antalet svar',
    answerOption: 'Svarsalternativ',
    publicInfo:
      'Resultaten från dessa frågor är synliga för studerandena. <2>Välj offentligtgjorda frågor</2>',
    notPublicInfo:
      'Resultaten från dessa frågor är inte synliga för studerandena. <2>Välj offentligtgjorda frågor</2>',
    publicityOfQuestions: 'Dessa frågor är endast synliga för kursens lärare',
    moreInfo: 'Mer information om frågornas synlighet finns',
    here: 'här',
  },
  feedbackSummary: {
    question: 'Fråga',
    average: 'Medeltal',
    standardDeviation: 'Standardavvikelse',
    median: 'Median',
    answers: 'Svar',
  },
  feedbackTargetResults: {
    notEnoughFeedbacksInfo:
      'Förfrågans resultat visas inte på grund av för få responser',
    onlyForEnrolledInfo:
      'Resultaten av förfrågan visas inte eftersom kursens lärare har ställt in responsen synlig endast för kursens deltagare',
    studentsWithFeedbackHeading: 'Studeranden som givit respons',
    responseHeading: 'Lärarens svar på responsen',
    giveResponse: 'Ge svar på responsen',
    editResponse: 'Redigera svaret på responsen',
    noResponseInfo: 'Kursens lärare har inte ännu svarat på responsen',
    export: 'Exportera som',
    exportCsv: 'Exportera som csv',
    exportPdf: 'Exportera som pdf',
    thankYouMessage:
      'Tack för reponsen. Här är en sammanfattning av responsen som har getts hittills.',
    closeImmediately: 'Stäng responsen genast',
    closeImmediatelyConfirm:
      'Efter att responsen stängts, går det inte att samla in respons mer. Vill du verkligen stänga responsen?',
    closeImmediatelyTomorrowConfirm:
      'Responsen stängs {{date}}, för att den ska vara öppen åtminstone ett dygn. Efter att responsen stängts, går det inte att samla in respons mer. Vill du verkligen stänga responsen?',
  },
  navBar: {
    myFeedbacks: 'Mina responser',
    myCourses: 'Mina kurser',
    logOut: 'Logga ut',
    admin: 'Admin',
    courseSummary: 'Kurssammandrag',
    nameFallback: 'Menu',
  },
  studentsWithFeedback: {
    noFeedbackInfo: 'Ingen har tillsvidare givit respons',
    studentsList: 'Studerande som gett respons',
  },
  feedbackResponse: {
    responseLabel: 'Svar på respons',
    responseInfo: 'Fält stöder innehåll med <2>Markdown</2>',
    previewLabel: 'Förhandsvisa',
    sendEmail: 'Meddela studerandena om responssammandraget via e-post',
    instructionTitle: 'Instruktioner för kursresponsen',
    responseInstruction:
      'Efter genomgång av kursresponsen som studerandena gett har läraren möjlighet att skicka till studerandena ett gemensamt svar som kommenterar kursresponsen. Detta fritt formulerade svar till kursresponsen skickas samtidigt till alla studerande på kursen. \n Ditt svar till studerandena är centralt i skapandet av en bra responskultur: det visar studerandena att deras respons faktiskt läses och beaktas. Det här uppmuntrar dem att ge konstruktiv feedback i framtiden.',
    writingInstruction:
      'Längden på lärarens svar kan variera. Du kan till exempel inkludera i ditt svar: ett tack till studerandena för responsen (och deltagande i kursen), ett sammandrag av responsen som getts, ett urval av de delar av responsen som du tycker är viktiga att svara på, med din reaktion och klargörande tillägg. Dina konkreta åtgärder för att ändra på undervisningen och kursinnehållet som svar till studerandenas respons är av största vikt.',
    dialogTitle: 'Spara svar',
    dialogContent:
      'När du sparar svaret på respons, skickas till studerandena ett e-post med svarets innehåll och en länk till kursens respons. När du sparat svaret kan du inte längre redigera det.',
    dialogCancel: 'Avbryt',
    dialogSubmit: 'Spara',
  },
  publicQuestions: {
    publicInfo:
      'Responsen gällande offentligtgjorda frågor visas för studeranden på <2>responssidan</2>',
    selectVisibility: 'Välj användare som ser de offentliga frågorna',
    none: 'Endast personal på utbildningsprogrammet',
    enrolled: 'Studerande på kursen',
    everyone: 'Alla användare',
  },
  courseSummary: {
    heading: 'Sammandrag av kursens respons',
    noResults: 'Inga responser',
    feedbackResponse: 'Svar på responsen för den senaste kursen given',
    feedbackCount: 'Antal respons',
    feedbackResponseGiven: 'Svar på responsen given',
    feedbackResponseNotGiven: 'Svar på reponsen saknas',
    feedbackStillOpen: 'Responsgivningen för kursen är fortfarande öppen',
    courseOngoing: 'Kursen är fortfarande på gång',
    editProgrammeSettings: 'Redigera inställningar för utbildningsprogrammet',
    courseRealisation: 'Kursinstans',
    searchLabel: 'Begränsa kurser',
    searchPlaceholder: 'Begränsa kurser med kurskod',
    responsibleTeachers: 'Ansvariga lärare',
    includeOpenUniCourses: 'Inkludera kurser i öppna universitetet',
    orderByLabel: 'Ordning',
    orderByCodeAsc: 'Kod i stigande ordning',
    orderByFeedbackCountAsc: 'Antal responser i stigande ordning',
    orderByFeedbackCountDesc: 'Antal reponser i fallande ordning',
  },
  footer: {
    contactSupport: 'Kontakta stödet',
    wikiLink: 'Användarinstruktioner',
    accessibilityDocument: 'Tillgänglighetsutlåtande',
  },
  courseRealisationFeedback: {
    noFeedbackTarget:
      'Det finns ingen respons tillgänglig för dig på denna kurs',
  },
  organisationSettings: {
    surveyInfo:
      'Frågor på utbildningsprogramsnivå visas i varje förfrågan för utbildningsprogrammets kurser efter frågorna på universitetsnivå. Förfrågan har redan {{count}} frågor på universitetsnivå, men du kan lägga till fler frågor om du vill.',
    studentListVisible:
      'Visa studerandena som har gett respons till kursens lärare',
    courseSettingsInfo: 'Respons samlas endast in för aktiverade kurser',
    generalTab: 'Allmänna inställningar',
    coursesTab: 'Aktiverade kurser',
    surveyTab: 'Utbildningsprogrammets förfrågan',
    editProgrammeQuestionsDialogTitle: 'Varning!',
    editProgrammeQuestionsDialogContent:
      'Du håller på att redigera hela utbildningsprogrammets gemensamma frågor. Dessa ändringar syns på alla av utbildningsprogrammets kurser. Är du säker på att du vill redigera dessa frågor?',
    editProgrammeQuestionsDialogCancel: 'Avbryt',
    editProgrammeQuestionsDialogConfirm: 'Redigera',
  },
  feedbackTargetView: {
    feedbackDisabled: 'Denna respons är inte i bruk',
    surveyTab: 'Förfrågan',
    feedbacksTab: 'Responser',
    feedbackResponseTab: 'Svar på responsen',
    editSurveyTab: 'Redigera förfrågan',
    studentsWithFeedbackTab: 'De som gett respons',
    linkCopied: 'Länken till responsen har kopierats till urklippet',
    copyLink: 'Kopiera länken',
    coursePeriod: 'Kursen på gång',
    feedbackPeriod: 'Responsgivningen öppen',
    editFeedbackTab: 'Redigera responsen',
  },
  noadUser: {
    noUser:
      'Något gick fel. Du är inte inloggad just nu. Pröva att trycka på e-postens länk igen eller ta kontakt med kursens lärare',
    noFeedback: 'Just nu finns det inga öppna kursresponser',
  },
}
