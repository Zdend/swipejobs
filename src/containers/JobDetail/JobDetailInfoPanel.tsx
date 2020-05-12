import React from 'react';
import styled from '@emotion/styled';

const JobDetailInfoPanelWrapper = styled.section`
  display: flex;
`;

const JobDetailInfoPanelLeft = styled.div`
  flex: 0 1 40px;
  display: flex;
  align-items: center;
`;

const JobDetailInfoPanelRight = styled.div`
  flex: 1;
`;

const JobDetailInfoPanelTitle = styled.h3`
  font-size: 1rem;
  font-weight: 900;
`;

const JobDetailInfoPanelContent = styled.div`
  font-size: 0.75rem;
`;

interface JobDetailInfoPanelProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const JobDetailInfoPanel = ({ icon, title, children }: JobDetailInfoPanelProps) => {
  return (
    <JobDetailInfoPanelWrapper>
      <JobDetailInfoPanelLeft>{icon}</JobDetailInfoPanelLeft>
      <JobDetailInfoPanelRight>
        <JobDetailInfoPanelTitle>{title}</JobDetailInfoPanelTitle>
        <JobDetailInfoPanelContent>{children}</JobDetailInfoPanelContent>
      </JobDetailInfoPanelRight>
    </JobDetailInfoPanelWrapper>
  );
};

export default JobDetailInfoPanel;
