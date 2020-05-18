import React, { useCallback } from 'react';
import {
  RiCalendar2Line,
  RiToolsLine,
  RiMapPinLine,
  RiAccountCircleLine,
  RiLoader4Line,
  RiArrowRightSLine
} from 'react-icons/ri';
import { Job } from '@/types/job';
import { useImage } from '@/hooks/useImage';
import {
  JobDetailWrapper,
  JobDetailBanner,
  JobDetailSummary,
  JobDetailNumeration,
  JobDetailNumerationLabel,
  JobDetailNumerationPanel,
  JobDetailNumerationValue,
  JobDetailInfoPanels,
  JobDetailActions
} from './JobDetail.styled';
import JobDetailInfoPanel from './JobDetailInfoPanel';
import Btn from '@/components/Btn';
import { BtnColorType, NotificationColorType } from '@/shared/theme';
import { fetchRejectJob, fetchAcceptJob } from '@/api/job';
import { useApiCallback } from '@/hooks/useApiCallback';
import { displayDateAndTime, displayTime } from '@/shared/date';
import Notification from '@/components/Notification';

interface JobDetailProps {
  workerId: string;
  job: Job;
  nextJob: Function;
}

const ICON_SIZE = 25;

const JobDetail = ({ workerId, job, nextJob }: JobDetailProps) => {
  const [jobImageLoaded, jobImageUrl] = useImage(job.jobTitle.imageUrl);
  const [
    rejectJob,
    { loading: rejectLoading, error: rejectError, data: rejectData }
  ] = useApiCallback(fetchRejectJob, workerId, job.jobId);
  const [
    acceptJob,
    { loading: acceptLoading, error: acceptError, data: acceptData }
  ] = useApiCallback(fetchAcceptJob, workerId, job.jobId);

  const onRejectJob = useCallback(() => {
    rejectJob(() => nextJob());
  }, [nextJob, rejectJob]);

  const onAcceptJob = useCallback(() => {
    acceptJob(response => {
      if (response.success) {
        nextJob();
      }
    });
  }, [nextJob, acceptJob]);

  const loading = rejectLoading || acceptLoading;
  const error =
    rejectError || acceptError || rejectData?.success === false || acceptData?.success === false;

  return (
    <JobDetailWrapper data-testid="job-detail">
      <JobDetailBanner
        src={jobImageLoaded ? jobImageUrl : '/images/logo.png'}
        contain={!jobImageLoaded}
      />
      <JobDetailSummary>
        <h1 className="text-lg">{job.jobTitle.name}</h1>
        <h2 className="text-sm">{job.company.name}</h2>
      </JobDetailSummary>
      <JobDetailNumeration>
        <JobDetailNumerationPanel>
          <JobDetailNumerationLabel>Distance</JobDetailNumerationLabel>
          <JobDetailNumerationValue>
            {Number(job.milesToTravel).toFixed(2)} miles
          </JobDetailNumerationValue>
        </JobDetailNumerationPanel>
        <JobDetailNumerationPanel>
          <JobDetailNumerationLabel className="text-right">Hourly Rate</JobDetailNumerationLabel>
          <JobDetailNumerationValue className="text-right">
            ${Number(job.wagePerHourInCents / 100).toFixed(2)}
          </JobDetailNumerationValue>
        </JobDetailNumerationPanel>
      </JobDetailNumeration>
      <JobDetailInfoPanels>
        <JobDetailInfoPanel icon={<RiCalendar2Line size={ICON_SIZE} />} title="Shift Dates">
          {job.shifts.length ? (
            job.shifts.map(shift => (
              <div key={shift.startDate + shift.endDate} className="uppercase mt-1">
                {displayDateAndTime(shift.startDate)} - {displayTime(shift.endDate)}
              </div>
            ))
          ) : (
            <div>To be determined.</div>
          )}
        </JobDetailInfoPanel>
        <JobDetailInfoPanel icon={<RiMapPinLine size={ICON_SIZE} />} title="Location">
          <a
            className="flex"
            href={`https://www.google.com.au/maps/place/${job.company.address?.formattedAddress}`}
            rel="noopener noreferrer"
            target="_blank"
            title="Open Maps"
          >
            <div className="flex-grow">
              <div>{job.company.address?.formattedAddress}</div>
              <div className="caption">{job.milesToTravel} miles from your job search location</div>
            </div>
            <div>
              <RiArrowRightSLine className="grey--text text-4xl" />
            </div>
          </a>
        </JobDetailInfoPanel>
        <JobDetailInfoPanel icon={<RiToolsLine size={ICON_SIZE} />} title="Requirements">
          {!job.requirements?.length ? (
            <div>No special requirements.</div>
          ) : (
            <ul>
              {job.requirements?.map((requirement, index) => (
                <li key={index}> - {requirement}</li>
              ))}
            </ul>
          )}
        </JobDetailInfoPanel>
        <JobDetailInfoPanel icon={<RiAccountCircleLine size={ICON_SIZE} />} title="Report To">
          {job.company.reportTo?.name} {job.company.reportTo?.phone}
        </JobDetailInfoPanel>
      </JobDetailInfoPanels>
      <JobDetailActions>
        <Btn
          color={BtnColorType.SECONDARY}
          disabled={loading}
          onClick={onRejectJob}
          data-testid="job-detail__reject"
        >
          {rejectLoading && <RiLoader4Line className="spin mr-2" />}
          No Thanks
        </Btn>
        <Btn
          color={BtnColorType.PRIMARY}
          disabled={loading}
          onClick={onAcceptJob}
          data-testid="job-detail__accept"
        >
          {acceptLoading && <RiLoader4Line className="spin mr-2" />}
          I&apos;ll Take it
        </Btn>
      </JobDetailActions>
      {error && (
        <Notification color={NotificationColorType.ERROR}>
          {acceptData?.message || rejectData?.message || 'Something went wrong!'}
        </Notification>
      )}
    </JobDetailWrapper>
  );
};

export default JobDetail;
