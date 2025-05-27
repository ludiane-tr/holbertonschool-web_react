// Définition des types "branded" pour éviter les confusions entre Major et Minor Credits
interface MajorCredits {
  credits: number;
  // propriété "brand" pour rendre le type unique (nominal typing)
  brand: "Major";
}

interface MinorCredits {
  credits: number;
  brand: "Minor";
}

// Fonction pour additionner deux MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major"
  };
}

// Fonction pour additionner deux MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor"
  };
}
