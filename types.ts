
export interface Mission {
  title: string;
  description: string;
  type: string;
}

export interface Vehicle {
  name: string;
  type: string;
  description: string;
}

export interface GameConcept {
  title: string;
  logline: string;
  synopsis: string;
  keyFeatures: string[];
  missions: Mission[];
  vehicles: Vehicle[];
}
