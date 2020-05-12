import { Job } from '@/types/job';

export const job: Job = {
  jobId: '123',
  jobTitle: {
    name: 'Construction General Helper',
    imageUrl:
      'https://www.hallpayne.com.au/imageGen.ashx?image=/media/1590/man-in-hangar-with-hard-hat-smaller.jpg'
  },
  company: {
    name: 'C.D. Barnes & Associates',
    address: {
      zoneId: 'Australia/Sydney',
      formattedAddress: '123 Main Street, Tacoma, WA, 98409'
    },
    reportTo: {
      name: 'Dave',
      phone: '(123) 546 987'
    }
  },
  shifts: [],
  milesToTravel: 5.6,
  requirements: ['Safety Vest', 'Hard Hat'],
  wagePerHourInCents: 1350,
  branchPhoneNumber: '12356780'
};
