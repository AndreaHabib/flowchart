export const onDelete = (isClassesTaken, className) => {
  if (
    !isClassesTaken["400 level elective*"].isTaken &&
    !isClassesTaken["CSC 330"].isTaken &&
    !isClassesTaken["CSC 382"].isTaken &&
    !isClassesTaken["CSC 315"].isTaken &&
    !isClassesTaken["CSC 332 & 305".isTaken] &&
    isClassesTaken["CSC 326"].isTaken
  ) {
    isClassesTaken["CSC 326"].canBeUntaken = true;
  }
  if (
    !isClassesTaken["CSC 332 & 305"].isTaken &&
    !isClassesTaken["CSC 346 & 347"].isTaken &&
    isClassesTaken["CSC 220"].isTaken
  ) {
    isClassesTaken["CSC 220"].canBeUntaken = true;
  }
  if (
    !isClassesTaken["CSC 490"].isTaken &&
    !isClassesTaken["CSC 430"].isTaken &&
    isClassesTaken["CSC 330"].isTaken
  ) {
    isClassesTaken["CSC 330"].canBeUntaken = true;
  }
  switch (className) {
    case "CSC 126":
    case "MTH 123":
      if (className === "MTH 123") {
        isClassesTaken["CSC 126"].isTaken = false;
        isClassesTaken["CSC 126"].canBeTaken = true;
        isClassesTaken["CSC 126"].canBeUntaken = false;
      } else {
        isClassesTaken["MTH 123"].isTaken = false;
        isClassesTaken["MTH 123"].canBeTaken = true;
        isClassesTaken["MTH 123"].canBeUntaken = false;
      }
      isClassesTaken["200 level elective*"].canBeTaken = false;
      isClassesTaken["CSC 211"].canBeTaken = false;
      isClassesTaken["CSC 220"].canBeTaken = false;
      isClassesTaken["MTH 230 & 229"].canBeTaken = false;
      isClassesTaken["MTH 231 & 229"].canBeTaken = false;
      break;
    case "MTH 230 & 229":
      isClassesTaken["MTH 232"].canBeTaken = false;
      isClassesTaken["MTH 231 & 229"].canBeTaken = true;
      if (
        !isClassesTaken["CSC 211"].isTaken &&
        !isClassesTaken["CSC 220"].isTaken &&
        !isClassesTaken["200 level elective*"].isTaken
      ) {
        isClassesTaken["MTH 123"].canBeUntaken = true;
        isClassesTaken["CSC 126"].canBeUntaken = true;
      }
      break;
    case "MTH 231 & 229":
      isClassesTaken["MTH 232"].canBeTaken = false;
      isClassesTaken["MTH 230 & 229"].canBeTaken = true;
      if (
        !isClassesTaken["CSC 211"].isTaken &&
        !isClassesTaken["CSC 220"].isTaken &&
        !isClassesTaken["200 level elective*"].isTaken
      ) {
        isClassesTaken["MTH 123"].canBeUntaken = true;
        isClassesTaken["CSC 126"].canBeUntaken = true;
      }
      break;
    case "200 level elective*":
      if (
        !isClassesTaken["CSC 211"].isTaken &&
        !isClassesTaken["200 level elective*"].isTaken
      ) {
        isClassesTaken["CSC 126"].canBeUntaken = true;
        if (
          !isClassesTaken["MTH 231 & 229"].isTaken ||
          !isClassesTaken["MTH 230 & 229"].isTaken
        ) {
          isClassesTaken["MTH 123"].canBeUntaken = true;
        }
      }
      break;
    case "CSC 211":
      if (
        !isClassesTaken["CSC 220"].isTaken &&
        !isClassesTaken["200 level elective*"].isTaken
      ) {
        isClassesTaken["CSC 126"].canBeUntaken = true;
        if (
          !isClassesTaken["MTH 231 & 229"].isTaken ||
          !isClassesTaken["MTH 230 & 229"].isTaken
        ) {
          isClassesTaken["MTH 123"].canBeUntaken = true;
        }
      }
      isClassesTaken["CSC 228"].canBeTaken = false;
      isClassesTaken["CSC 326"].canBeTaken = false;
      break;
    case "CSC 220":
      if (
        !isClassesTaken["CSC 211"].isTaken &&
        !isClassesTaken["200 level elective*"].isTaken
      ) {
        isClassesTaken["CSC 126"].canBeUntaken = true;
        if (
          !isClassesTaken["MTH 231 & 229"].isTaken ||
          !isClassesTaken["MTH 230 & 229"].isTaken
        ) {
          isClassesTaken["MTH 123"].canBeUntaken = true;
        }
      }
      isClassesTaken["CSC 346 & 347"].canBeTaken = false;
      isClassesTaken["CSC 332 & 305"].canBeTaken = false;
      break;
    case "CSC 228":
    case "CSC 326":
    case "MTH 232":
      if (
        !isClassesTaken["CSC 326"].isTaken ||
        !isClassesTaken["CSC 228"].isTaken ||
        !isClassesTaken["MTH 232"].isTaken
      ) {
        isClassesTaken["CSC 382"].canBeTaken = false;
      }
      if (
        !isClassesTaken["CSC 228"].isTaken &&
        !isClassesTaken["CSC 326"].isTaken
      ) {
        isClassesTaken["CSC 211"].canBeUntaken = true;
      }
      if (className === "MTH 232") {
        if (isClassesTaken["MTH 230 & 229"].isTaken) {
          isClassesTaken["MTH 230 & 229"].canBeUntaken = true;
        } else {
          isClassesTaken["MTH 231 & 229"].canBeUntaken = true;
        }
      }
      if (className === "CSC 326") {
        isClassesTaken["400 level elective*"].canBeTaken = false;
        isClassesTaken["CSC 330"].canBeTaken = false;
        isClassesTaken["CSC 315"].canBeTaken = false;
      }
      break;
    case "CSC 330":
    case "CSC 315":
      if (
        !isClassesTaken["CSC 330"].isTaken &&
        !isClassesTaken["CSC 315"].isTaken
      ) {
        isClassesTaken["CSC 326"].canBeUntaken = true;
      }
      if (
        !isClassesTaken["CSC 330"].isTaken ||
        !isClassesTaken["CSC 315"].isTaken
      ) {
        isClassesTaken["CSC 430"].canBeTaken = false;
      }
      if (className === "CSC 330") {
        isClassesTaken["CSC 490"].canBeTaken = false;
      }
      break;
    case "CSC 346 & 347":
      isClassesTaken["CSC 220"].canBeUntaken = true;
      isClassesTaken["CSC 446"].canBeTaken = false;
      break;
    case "CSC 382":
      isClassesTaken["CSC 228"].canBeUntaken = true;
      isClassesTaken["MTH 232"].canBeUntaken = true;
      break;
    case "CSC 430":
      isClassesTaken["CSC 315"].canBeUntaken = true;
      break;
    case "CSC 446":
      isClassesTaken["CSC 346 & 347"].canBeUntaken = true;
      break;
    default:
      break;
  }
};
