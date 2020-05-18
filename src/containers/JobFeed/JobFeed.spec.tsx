import React from 'react';
import { render, waitFor, act, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JobFeed from './JobFeed';
import { job } from '@/fixtures/job';

const WORKER_ID = '123w';
const JOB_DETAIL_ID = 'job-detail';
const JOB_DETAIL_ACCEPT_ID = 'job-detail__accept';
const JOB_FEED_ALL_SEEN = 'job-feed__all-seen';

jest.useFakeTimers();

describe('JobFeed', () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });
  it('renders all seen status after seeing all jobs', async () => {
    const spy = jest
      .spyOn(global, 'fetch')
      .mockImplementationOnce(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve([job])
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve({ success: true })
        })
      );

    const { findByTestId, container } = render(<JobFeed workerId={WORKER_ID} />);

    await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
    await findByTestId(JOB_DETAIL_ID);
    const acceptBtn = await findByTestId(JOB_DETAIL_ACCEPT_ID);

    act(() => {
      userEvent.click(acceptBtn);
    });

    await waitFor(() => expect(spy).toHaveBeenCalledTimes(2));
    await findByTestId(JOB_FEED_ALL_SEEN);

    expect(container.textContent).toBe('You have seen all positions, please come back later.');
  });
});
