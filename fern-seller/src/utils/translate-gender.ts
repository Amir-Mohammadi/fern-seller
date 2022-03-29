import { Gender } from '../api/models';

export function translateGender(gender: Gender): string {
  switch (gender) {
    case Gender.Female: {
      return 'زن';
    }
    case Gender.Male: {
      return 'مرد';
    }
    default: {
      return 'نامشخص';
    }
  }
}
