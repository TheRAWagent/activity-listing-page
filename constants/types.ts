export type OnlineClass = {
    id: number
    time: Date
    duration: number
    title: string
    description: string
}

export type Assignment = {
    id: number
    title: string
    description: string
    submission: Date
    marks: number
}

export type Discussion = {
    id: number
    time: Date
    duration: number
    title: string
    description: string
}

export type Quiz = {
    id: number
    time: Date
    duration: number
    title: string
    description: string
    marks: number
}

export type Assesment = Assignment | Quiz | Discussion;

export type Activity = OnlineClass | Assesment;

export const activities: Activity[] = [
    {
        id: 1,
        time: new Date('2024-06-10T09:00:00'),
        duration: 60,
        title: "Mathematics Online Class",
        description: "Algebra and Equations"
    },
    {
        id: 2,
        title: "English Essay Assignment",
        description: "Write an essay on climate change.",
        submission: new Date('2024-06-12T23:59:00'),
        marks: 20
    },
    {
        id: 3,
        time: new Date('2024-06-11T14:00:00'),
        duration: 30,
        title: "Science Quiz",
        description: "Quiz on Photosynthesis"
    },
    {
        id: 4,
        time: new Date('2024-06-13T10:00:00'),
        duration: 45,
        title: "History Online Class",
        description: "World War II Overview"
    },
    {
        id: 5,
        time: new Date('2024-06-14T16:00:00'),
        duration: 40,
        title: "Geography Discussion",
        description: "Discuss global warming impacts"
    },
    {
        id: 6,
        title: "Math Homework Assignment",
        description: "Complete exercises 5-10 on page 42.",
        submission: new Date('2024-06-15T23:59:00'),
        marks: 20
    },
    {
        id: 7,
        time: new Date('2024-06-16T11:00:00'),
        duration: 30,
        title: "Chemistry Quiz",
        description: "Quiz on chemical reactions"
    },
    {
        id: 8,
        time: new Date('2024-06-17T09:00:00'),
        duration: 60,
        title: "Physics Online Class",
        description: "Newton's Laws of Motion"
    },
    {
        id: 9,
        time: new Date('2024-06-18T15:00:00'),
        duration: 35,
        title: "Literature Discussion",
        description: "Discuss Shakespeare's sonnets"
    },
    {
        id: 10,
        title: "Biology Lab Report",
        description: "Submit your findings on plant growth.",
        submission: new Date('2024-06-19T23:59:00'),
        marks: 20
    },
    {
        id: 11,
        time: new Date('2024-06-20T13:00:00'),
        duration: 30,
        title: "Math Quiz",
        description: "Quiz on trigonometry"
    },
    {
        id: 12,
        time: new Date('2024-06-21T10:00:00'),
        duration: 50,
        title: "Computer Science Online Class",
        description: "Introduction to Algorithms"
    },
    {
        id: 13,
        time: new Date('2024-06-22T14:30:00'),
        duration: 40,
        title: "Art Discussion",
        description: "Modern art movements"
    },
    {
        id: 14,
        title: "History Assignment",
        description: "Write a report on the Industrial Revolution.",
        submission: new Date('2024-06-23T23:59:00'),
        marks: 20
    },
    {
        id: 15,
        time: new Date('2024-06-24T12:00:00'),
        duration: 30,
        title: "Geography Quiz",
        description: "Quiz on world capitals"
    }
]