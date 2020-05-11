import React from 'react';
import { useApiData } from '@/hooks/useApiData';
import PageLoader from '@/components/PageLoader';
import GenericError from '@/components/GenericError';

interface JobDetailProps {

}

const JobDetail = ({}: JobDetailProps) => {
  const { loading, error, data } = useApiData();
  if (loading) {
    return <PageLoader className="my-4" inline data-testid="title-feed__loader" />;
  }
  if (error) {
    return <GenericError className="my-4" data-testid="title-feed__error" />;
  }
  if (!data || data.total < 1) {
    return (
      <h3 className="my-4" data-testid="title-feed__no-data">
        No titles found.
      </h3>
    );
  }

  return (
    null
  );
};

export default JobDetail;
