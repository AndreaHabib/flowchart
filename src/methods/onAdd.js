export const onAdd = (isClassesTaken, className) => {
  switch (className) {
    case "CSC 126":
      isClassesTaken["200 level elective*"].canBeTaken = true;
      isClassesTaken["CSC 211"].canBeTaken = true;
      isClassesTaken["CSC 220"].canBeTaken = true;
      break;
    case "200 level elective*":
      isClassesTaken["CSC 126"].canBeUntaken = false;
      break;
    case "CSC 211":
      isClassesTaken["CSC 126"].canBeUntaken = false;
      isClassesTaken["CSC 228"].canBeTaken = true;
      isClassesTaken["CSC 326"].canBeTaken = true;
      break;
    case "CSC 220":
      isClassesTaken["CSC 126"].canBeUntaken = false;
      isClassesTaken["CSC 346 & 347"].canBeTaken = true;
      isClassesTaken["CSC 332 & 305"].canBeTaken = true;
      break;
    case "CSC 228":
    case "CSC 326":
      isClassesTaken["CSC 211"].canBeUntaken = false;
      if (
        isClassesTaken["CSC 326"].isTaken &&
        isClassesTaken["CSC 228"].isTaken
      ) {
        isClassesTaken["CSC 382"].canBeTaken = true;
      }
      if (className === "CSC 326") {
        isClassesTaken["400 level elective*"].canBeTaken = true;
        isClassesTaken["CSC 330"].canBeTaken = true;
        isClassesTaken["CSC 315"].canBeTaken = true;
      }
      break;
    case "CSC 332 & 305":
      isClassesTaken["CSC 220"].canBeUntaken = false;
      isClassesTaken["CSC 326"].canBeUntaken = false;
      break;
    case "CSC 330":
    case "CSC 315":
      isClassesTaken["CSC 326"].canBeUntaken = false;
      if (
        isClassesTaken["CSC 330"].isTaken ||
        isClassesTaken["CSC 315"].isTaken
      ) {
        isClassesTaken["CSC 326"].canBeUntaken = false;
      }
      if (
        isClassesTaken["CSC 330"].isTaken &&
        isClassesTaken["CSC 315"].isTaken
      ) {
        isClassesTaken["CSC 430"].canBeTaken = true;
      }
      if (className === "CSC 330") {
        isClassesTaken["CSC 490"].canBeTaken = true;
      }
      break;
    case "CSC 346 & 347":
      isClassesTaken["CSC 220"].canBeUntaken = false;
      isClassesTaken["CSC 446"].canBeTaken = true;
      break;
    case "CSC 382":
      isClassesTaken["CSC 228"].canBeUntaken = false;
      isClassesTaken["CSC 326"].canBeUntaken = false;
      break;
    case "400 level elective*":
      isClassesTaken["CSC 326"].canBeUntaken = false;
      break;
    case "CSC 430":
      isClassesTaken["CSC 315"].canBeUntaken = false;
      isClassesTaken["CSC 330"].canBeUntaken = false;
      break;
    case "CSC 446":
      isClassesTaken["CSC 346 & 347"].canBeUntaken = false;
      break;
    case "CSC 490":
      isClassesTaken["CSC 330"].canBeUntaken = false;
      break;
    default:
      break;
  }
};
