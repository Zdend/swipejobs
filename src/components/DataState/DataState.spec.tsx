import React from 'react';
import { render } from '@testing-library/react';
import DataState from './DataState';

const LOADER_ID = 'data-state__loader';
const ERROR_ID = 'data-state__error';
const NO_DATA_ID = 'data-state__no-data';

describe('DataState', () => {
  it('renders loading state placeholder', () => {
    const mockProps = { loading: true, data: null, error: null };
    const { getByTestId } = render(<DataState {...mockProps} />);
    expect(getByTestId(LOADER_ID).textContent).toContain('Loading...');
  });

  it('renders error state', () => {
    const mockProps = { loading: false, data: null, error: { code: 'FATAL' } };
    const { getByTestId } = render(<DataState {...mockProps} />);
    expect(getByTestId(ERROR_ID).textContent).toContain('Something went wrong..');
  });

  it('renders no data placeholder', () => {
    const mockProps = { loading: false, data: null, error: null };
    const { getByTestId } = render(<DataState {...mockProps} />);
    expect(getByTestId(NO_DATA_ID).textContent).toContain('No data found.');
  });

  it('renders nothing otherwise', () => {
    const mockProps = { loading: false, data: { foo: 'bar' }, error: null };
    const { container } = render(<DataState {...mockProps} />);
    expect(container.textContent).toBeFalsy();
  });
});
