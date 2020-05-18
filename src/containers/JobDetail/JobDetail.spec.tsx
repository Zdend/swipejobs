import React from 'react';
import { render, waitFor, act, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JobDetail from './JobDetail';
import { job } from '@/fixtures/job';

const WORKER_ID = '123w';
const JOB_DETAIL_ID = 'job-detail';
const JOB_DETAIL_REJECT_ID = 'job-detail__reject';
const JOB_DETAIL_ACCEPT_ID = 'job-detail__accept';

describe('JobDetail', () => {
  beforeEach(() => {
    cleanup();
    jest.resetAllMocks();
  });
  it('renders job detail', () => {
    const nextJobFn = jest.fn();
    const { getByTestId } = render(
      <JobDetail workerId={WORKER_ID} nextJob={nextJobFn} job={job} />
    );
    const contain = (text: string) =>
      expect(getByTestId(JOB_DETAIL_ID).textContent).toContain(text);

    contain(job.jobTitle.name);
    contain(job.company.name);
    contain(job.company.address.formattedAddress);
    contain(job.company.reportTo.name);
    contain(job.company.reportTo.phone);
    contain((job.wagePerHourInCents / 100).toFixed(2));
    contain(job.milesToTravel.toFixed(2));
    job.requirements.forEach(contain);
  });

  it.each([JOB_DETAIL_REJECT_ID, JOB_DETAIL_ACCEPT_ID])(
    'transitions to the next role on reject and accept',
    async selector => {
      const nextJobFn = jest.fn();

      const spy = jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve({ success: true })
        })
      );
      const { getByTestId } = render(
        <JobDetail workerId={WORKER_ID} nextJob={nextJobFn} job={job} />
      );

      act(() => {
        userEvent.click(getByTestId(selector));
      });

      await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
      await waitFor(() => expect(nextJobFn).toHaveBeenCalledTimes(1));
    }
  );
});
