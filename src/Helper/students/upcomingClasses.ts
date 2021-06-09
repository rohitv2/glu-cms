import {
    CarouselClassCardElement,
    DateSubjectCardElement,
    FeaturedCardElement,
    ImageCardElement,
    NextClassCardElement,
} from '../../components/Cards/types';
import { parseDate, parseTime } from '../date';

export function dataToNextClassCard({
    description,
    scheduledOn,
    startTime,
    endTime,
    sessionName,
    FreelancerSubjectTeacher,
}: any): NextClassCardElement {
    return {
        img: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596608147/gluschool/vrplayerboy_ddqot7.jpg',
        subject: sessionName,
        description,
        subTitle: '75 min',
        name: `${FreelancerSubjectTeacher.Teacher.firstName} ${FreelancerSubjectTeacher.Teacher.lastName}`,
        date: parseDate(scheduledOn),
        startTime: parseTime(startTime),
        endTime: parseTime(endTime),
        teacherId: FreelancerSubjectTeacher.Teacher.id,
    };
}

export function dataToFeaturedCard(data: any): FeaturedCardElement {
    return data.length === 1
        ? {
              imgSmall: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607726/spectsboy_lspzcn.jpg',
              imgSmallTitle: data[0].subjectName,
              imgBig: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607724/shorthair_wwigyg.jpg',
              imgBigTitle: data[0].subjectName,
          }
        : {
              imgSmall: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607726/spectsboy_lspzcn.jpg',
              imgSmallTitle: data[0].subjectName,
              imgBig: 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607724/shorthair_wwigyg.jpg',
              imgBigTitle: data[1].subjectName,
          };
}

export function dataToImageCards(data: any[]): ImageCardElement[] {
    return data.map(
        ({
            id,
            coverImage,
            description,
            price,
            scheduledOn,
            startTime,
            endTime,
            FreelancerSubjectTeacher: { FreelancerSubject, Teacher },
        }) => ({
            id,
            img: coverImage || 'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607729/tablegirl_yg2bzv.jpg',
            title: `${description}\n${FreelancerSubject.subjectName}. ${Teacher.firstName} ${Teacher.lastName}`,
            subTitle: `AED${price}`,
            date: parseDate(scheduledOn),
            time: `${parseTime(startTime)} - ${parseTime(endTime)}`,
        })
    );
}

function dataToDateSubjectCard({
    scheduledOn,
    startTime,
    description,
    duration,
    endTime,
    FreelancerSubjectTeacher: { FreelancerSubject, Teacher },
}: any): DateSubjectCardElement {
    return {
        date: parseDate(scheduledOn),
        startTime: parseTime(startTime),
        endTime: parseTime(endTime),
        subject: FreelancerSubject.subjectName,
        description,
        subTitle: duration,
        name: `${Teacher.firstName} ${Teacher.lastName}`,
        rating: '5/5',
        teacherId: Teacher.id,
    };
}

export function dataToCarouselCards(data: any[]): CarouselClassCardElement[] {
    return data.map((item) => ({
        img:
            item.coverImage ||
            'https://res.cloudinary.com/ddwbbzuxw/image/upload/v1597322212/gluschool/tutorDashboard_plnp4i.jpg',
        ...dataToDateSubjectCard(item),
    }));
}

export function dataToDateSubjectCards(data: any[]): DateSubjectCardElement[] {
    return data.map(dataToDateSubjectCard);
}
