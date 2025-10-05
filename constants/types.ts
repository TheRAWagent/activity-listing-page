// Base abstract class
export abstract class Activity {
  id: number;
  title: string;
  description: string;

  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  /** A method to get a human-readable type name */
  abstract getTypeName(): string;
}

// Online class
export class OnlineClass extends Activity {
  time: Date;
  duration: number;

  constructor(
    id: number,
    title: string,
    description: string,
    time: Date,
    duration: number
  ) {
    super(id, title, description);
    this.time = time;
    this.duration = duration;
  }

  getTypeName(): string {
    return "OnlineClass";
  }
}

// Assessment base (for common properties among Assignment / Quiz / Discussion)
export abstract class Assessment extends Activity {
  // You could add common assessment methods here if any
  constructor(id: number, title: string, description: string) {
    super(id, title, description);
  }
}

// Assignment
export class Assignment extends Assessment {
  submission: Date;
  marks: number;

  constructor(
    id: number,
    title: string,
    description: string,
    submission: Date,
    marks: number
  ) {
    super(id, title, description);
    this.submission = submission;
    this.marks = marks;
  }

  getTypeName(): string {
    return "Assignment";
  }
}

// Quiz
export class Quiz extends Assessment {
  time: Date;
  duration: number;
  marks: number;

  constructor(
    id: number,
    title: string,
    description: string,
    time: Date,
    duration: number,
    marks: number
  ) {
    super(id, title, description);
    this.time = time;
    this.duration = duration;
    this.marks = marks;
  }

  getTypeName(): string {
    return "Quiz";
  }
}

// Discussion
export class Discussion extends Assessment {
  time: Date;
  duration: number;
  topic: string;

  constructor(
    id: number,
    title: string,
    description: string,
    time: Date,
    duration: number,
    topic: string
  ) {
    super(id, title, description);
    this.time = time;
    this.duration = duration;
    this.topic = topic;
  }

  getTypeName(): string {
    return "Discussion";
  }
}

export const activities: Activity[] = [
  new OnlineClass(1, "Mathematics Online Class", "Algebra and Equations", new Date('2024-06-10T09:00:00'), 60),
  new Assignment(2, "English Essay Assignment", "Write an essay on climate change.", new Date('2024-06-12T23:59:00'), 20),
  new Quiz(3, "Science Quiz", "Quiz on Photosynthesis", new Date('2024-06-11T14:00:00'), 30, 20),
  new OnlineClass(4, "History Online Class", "World War II Overview", new Date('2024-06-13T10:00:00'), 45),
  new Discussion(5, "Geography Discussion", "Discuss global warming impacts", new Date('2024-06-14T16:00:00'), 40, "Global Warming"),
  new Assignment(6, "Math Homework Assignment", "Complete exercises 5-10 on page 42.", new Date('2024-06-15T23:59:00'), 20),
  new Quiz(7, "Chemistry Quiz", "Quiz on chemical reactions", new Date('2024-06-16T11:00:00'), 30, 20),
  new OnlineClass(8, "Physics Online Class", "Newton's Laws of Motion", new Date('2024-06-17T09:00:00'), 60),
  new Discussion(9, "Literature Discussion", "Discuss Shakespeare's sonnets", new Date('2024-06-18T15:00:00'), 35, "Shakespeare"),
  new Assignment(10, "Biology Lab Report", "Submit your findings on plant growth.", new Date('2024-06-19T23:59:00'), 20),
  new Quiz(11, "Math Quiz", "Quiz on trigonometry", new Date('2024-06-20T13:00:00'), 30, 20),
  new OnlineClass(12, "Computer Science Online Class", "Introduction to Algorithms", new Date('2024-06-21T10:00:00'), 50),
  new Discussion(13, "Art Discussion", "Modern art movements", new Date('2024-06-22T14:30:00'), 40, "Art"),
  new Assignment(14, "History Assignment", "Write a report on the Industrial Revolution.", new Date('2024-06-23T23:59:00'), 20),
  new Quiz(15, "Geography Quiz", "Quiz on world capitals", new Date('2024-06-24T12:00:00'), 30, 20)
]