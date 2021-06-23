/* eslint-disable max-len */

export default {
  common: {
    languages: {
      fi: 'Suomi',
      sv: 'Ruotsi',
      en: 'Englanti',
    },
    validationErrors: {
      required: 'Tämä kenttä vaaditaan',
      wrongDate: 'Kysely sulkeutuu ennen sen avautumista',
    },
    unknownError: 'Jotain meni pieleen',
    save: 'Tallenna',
    saveSuccess: 'Tiedot tallennettiin onnistuneesti',
    name: 'Nimi',
    edit: 'Muokkaa',
    show: 'Näytä',
    feedbackOpenPeriod:
      'Palautetta voi antaa aikavälillä {{opensAt}} - {{closesAt}}',
    firstName: 'Etunimi',
    lastName: 'Sukunimi',
    username: 'Käyttäjätunnus',
    studentNumber: 'Opiskelijanumero',
    dirtyFormPrompt:
      'Sivulla on tallentamattomia muutoksia. Oletko varma, että haluat siirtyä pois sivulta?',
    actions: 'Toiminnot',
    close: 'Sulje',
    required: 'Pakollinen',
    copy: 'Kopioi',
  },
  userFeedbacks: {
    mainHeading: 'Kurssipalautteeni',
    giveFeedbackButton: 'Anna palautetta',
    modifyFeedbackButton: 'Muokkaa palautetta',
    clearFeedbackButton: 'Tyhjennä palaute',
    clearConfirmationQuestion: 'Haluatko varmasti tyhjentää tämän palautteen?',
    yes: 'Kyllä',
    no: 'Ei',
    viewFeedbackSummary: 'Näytä palautteen yhteenveto',
    noFeedback: 'Ei vielä nähtävää täällä. Tule takaisin myöhemmin!',
    feedbackClosed: 'Suljetut',
    waitingForFeedback: 'Odottavat',
    feedbackGiven: 'Annetut',
  },
  feedbackView: {
    submitButton: 'Lähetä palaute',
    successAlert: 'Palaute on annettu',
    feedbackInfo:
      'Tämä palaute annetaan anonyymisti. Tähdellä (*) merkityt kentät ovat pakollisia.',
    feedbackInfoLink: 'Lue lisää, miten tietojasi käytetään',
    closedInfo:
      'Palaute on tällä hetkellä suljettu. Palautetta voi antaa välillä {{opensAt}} - {{closesAt}}',
    privacyInfoTitle: 'Miten tietojani käytetään?',
    privacyInfoContent:
      'Kirjautumistietoja käytetään muun muassa siihen, että opiskelijalle näytetään oikeat palautteet, osataan lähettää muistusviestit, ja opettaja voi katsoa ketkä ovat lähettäneet palautetta (ja sen perusteella antaa esimerkiksi kurssipisteitä), mutta opettaja ei voi yhdistää palautetta opiskelijaan. Opettaja näkee reaaliaikaisen listan palautteen antaneista, mutta palautteet näkyvät vasta palautteenantamisajan jälkeen. Jos kurssille annettaan viisi tai vähemmän palautetta, ei niitä näytetä ollenkaan.',
    dontKnowOption: 'eos',
    editSurvey: 'Muokkaa kyselyä',
    translationLanguage: 'Kyselyn esikatselun kieli',
    cannotSubmitText:
      'Et voi lähettää palautetta, sillä et ole ilmoittautunut kurssille',
    feedbackClosedError: 'Palautteenanto on loppunut',
    endedInfo: 'Palautteenanto on päättynyt. <2>Katso palautteita</2>',
    feedbackDisabled: 'Tämä palaute ei ole käytössä',
  },
  teacherView: {
    mainHeading: 'Opetukseni',
    showFeedbacks: 'Näytä palautteet',
    showSurvey: 'Näytä kysely',
    editSurvey: 'Muokkaa kyselyä',
    copyLink: 'Kopioi vastauslinkki',
    copyResponseLink: 'Kopioi linkki vastapalautteeseen',
    copied: 'Linkki kopioitu leikepöydälle',
    showStudentsWithFeedback: 'Näytä palautetta antaneet opiskelijat',
    feedbackCount: '{{count}}/{{totalCount}} palautetta annettu',
    giveFeedbackResponse: 'Anna palautekooste',
    editFeedbackResponse: 'Muokkaa palautekoostetta',
    noCourseRealisations: 'Ei kurssitoteutuksia',
    noCourses: 'Ei kursseja',
    feedbackResponseGiven: 'Palautekooste annettu',
    feedbackResponseMissing: 'Palautekooste puuttuu',
    feedbackOpen: 'Palaute käynnissä',
    ongoingCourses: 'Käynnissä olevat kurssit',
    upcomingCourses: 'Tulevat kurssit',
    endedCourses: 'Päättyneet kurssit',
    feedbackNotStarted: 'Palautejakso ei ole vielä alkanut',
    surveyOpen: 'Palautteenantoaika: {{opensAt}}-{{closesAt}}',
  },
  questionEditor: {
    addQuestion: 'Lisää kysymys',
    likertQuestion: 'Arvoasteikko',
    openQuestion: 'Avoin kysymys',
    singleChoiceQuestion: 'Monivalinta - valitse yksi',
    multipleChoiceQuestion: 'Monivalinta - valitse monta',
    textualContent: 'Tekstuaalinen sisältö',
    moveUp: 'Siirrä ylös',
    moveDown: 'Siirrä alas',
    removeQuestion: 'Poista kysymys',
    options: 'Vaihtoehdot',
    option: 'Vaihtoehto',
    addOption: 'Lisää vaihtoehto',
    removeOption: 'Poista vaihtoehto',
    label: 'Kysymys',
    content: 'Sisältö',
    removeQuestionConfirmation: 'Haluatko varmasti poistaa tämän kysymyksen?',
    removeOptionConfirmation: 'Haluatko varmasti poistaa tämän vaihtoehdon?',
    description: 'Kuvaus',
    done: 'Valmis',
    languageInfo: 'Muokkaat tällä hetkellä kysymyksen "{{language}}" käännöstä',
    descriptionHelper: 'Vapaaehtoinen kuvausteksti, joka tarkentaa kysymystä',
    universityQuestion: 'Yliopistotason kysymys',
    programmeQuestion: 'Koulutusohjelmatason kysymys',
  },
  editFeedbackTarget: {
    closesAt: 'Sulkeutuu',
    opensAt: 'Avautuu',
    hidden: 'Piilotettu',
    upperLevelQuestionsInfo:
      'Kyselyllä on jo {{count}} yliopisto- ja koulutusohjelmatason kysymystä, mutta voit halutessasi lisätä sille lisää kysymyksiä. "Esikatsele kyselyä"-painiketta painamalla näet, miltä kysely näyttää kaikkine kysymyksineen',
    showPreview: 'Esikatsele kyselyä',
    translationLanguage: 'Käännösten kieli',
    warningAboutOpeningCourse:
      'HUOM! Kyselyn tietoja ei voi muokata kyselyn avautumisen jälkeen',
    opensAtIsNow:
      'Kysely on asetettu avautumaan heti! Kyselyn ollessa auki sitä ei voi enää muokata. Haluatko varmasti tallentaa kyselyn?',
    checkbox: 'Ymmärrän',
    noUnsavedChanges: 'Sinulla ei ole tallentamattomia muutoksia',
  },
  questionResults: {
    answerCount: 'Vastausten määrä',
    answerOption: 'Vastausvaihtoehto',
    publicInfo:
      'Tämän kysymyksen tulokset ovat julkisia opiskelijoille. <2>Valitse julkiset kysymykset</2>',
    notPublicInfo:
      'Tämän kysymyksen tulokset eivät ole julkisia opiskelijoille. <2>Valitse julkiset kysymykset</2>',
  },
  feedbackSummary: {
    question: 'Kysymys',
    average: 'Keskiarvo',
    standardDeviation: 'Keskihajonta',
    median: 'Mediaani',
    answers: 'Vastanneita',
  },
  feedbackTargetResults: {
    notEnoughFeedbacksInfo:
      'Kyselyn tuloksia ei näytetä, sillä siinä ei ole tarpeeksi palautteita',
    onlyForEnrolledInfo:
      'Kyselyn tuloksia ei näytetä, sillä kurssin opettaja on asettanut palautteen näkyväksi vain kurssin opiskelijoille',
    studentsWithFeedbackHeading: 'Opiskelijat, jotka ovat antaneet palautetta',
    responseHeading: 'Opettajan palautekooste',
    giveResponse: 'Anna palautekooste',
    editResponse: 'Muokkaa palautekoostetta',
    noResponseInfo: 'Kurssin opettaja ei ole vielä antanut palautekoostetta',
    exportCsv: 'Lataa CSV',
    thankYouMessage:
      'Kiitos palautteesta, tässä on yhteenveto tähän mennessä annetuista palautteista.',
  },
  navBar: {
    myFeedbacks: 'Kurssipalautteeni',
    myCourses: 'Opetukseni',
    logOut: 'Kirjaudu ulos',
    admin: 'Ylläpito',
    courseSummary: 'Kurssiyhteenveto',
    nameFallback: 'Valikko',
  },
  studentsWithFeedback: {
    noFeedbackInfo:
      'Kukaan ei ole antanut palautetta vielä tai koulutusohjelman palautetta antaneita opiskelijoita ei näytetä',
    studentsList: 'Palautteen antaneet opiskelijat',
  },
  feedbackResponse: {
    responseLabel: 'Palautekooste',
    responseInfo: 'Tämä kenttä tukee <2>Markdown</2>-sisältöä',
    previewLabel: 'Esikatselu',
  },
  publicQuestions: {
    publicInfo:
      'Valitse mihin kysymyksiin liittyvä palaute julkaistaan opiskelijoille <2>palautesivulla</2> palautejakson päätyttyä. Huomaa, että yliopistotason Likert-asteikon kysymyksiin liittyvä palaute julkaistaan aina opiskelijoille palautejakson päätyttyä',
    selectVisibility: 'Valitse käyttäjät jotka näkevät julkiset kysymykset',
    none: 'Vain koulutusohjelman henkilöstö',
    enrolled: 'Kurssin opiskelijat',
    everyone: 'Kaikki käyttäjät',
  },
  courseSummary: {
    heading: 'Kurssipalautteiden yhteenveto',
    noResults: 'Ei palautteita',
    feedbackResponse: 'Viimeisimmän kurssin palautekooste annettu',
    feedbackCount: 'Palautteiden määrä',
    feedbackResponseGiven: 'Palautekooste on annettu',
    feedbackResponseNotGiven: 'Palautekoostetta ei ole annettu',
    feedbackStillOpen: 'Kurssin palautejakso on vielä käynnissä',
    courseOngoing: 'Kurssi on vielä käynnissä',
    editProgrammeSettings: 'Muokkaa koulutusohjelman asetuksia',
    courseRealisation: 'Kurssitoteutus',
  },
  organisationView: {
    organisations: 'Organisaatiot',
    noOrganisation: 'Tämä käyttäjä ei ole minkään organisaation jäsen',
    organisationName: 'Nimi',
    organisationCode: 'Organisaation koodi',
  },
  editProgrammeSurvey: {
    noWriteAccess:
      'Sinulla ei ole oikeuksia muokata tämän koulutusohjelman kyselyä',
    upperLevelQuestionsInfo:
      'Kyselyllä on jo {{count}} yliopistotason kysymystä, mutta voit halutessasi lisätä sille lisää kysymyksiä.',
    bigBoss:
      'Koulutusohjelman kysymyksiä ja asetuksia voi muokata koulutusohjelman henkilökunta.',
    studentListVisible: 'Opiskelijoiden lista näkyvissä',
    programmeSettings: 'Koulutusohjelman asetukset',
  },
  footer: {
    contactSupport: 'Ota yhteyttä tukeen',
  },
  courseRealisationFeedback: {
    noFeedbackTarget:
      'Tällä kurssilla ei ole sinulle saatavilla olevaa palautetta',
  },
  organisationSettings: {
    surveyInfo:
      'Koulutusohjelmatason kysymykset näytetään jokaisessa koulutusohjelman kurssin kyselyssä yliopistotason kysymysten jälkeen. Kyselyllä on jo {{count}} yliopistotason kysymystä, mutta voit halutessasi lisätä sille lisää kysymyksiä.',
    studentListVisible:
      'Näytä palautetta antaneet opiskelijat kurssin opettajalle',
    courseSettingsInfo: 'Palautetta kerätään vain aktivoiduilla kursseilla',
    generalTab: 'Yleiset asetukset',
    coursesTab: 'Aktivoidut kurssit',
    surveyTab: 'Koulutusohjelman kysely',
  },
}
