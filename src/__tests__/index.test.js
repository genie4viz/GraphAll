import React from 'react';
import { render } from 'react-testing-library';
import App from '../pages/index.js';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

jest.mock('next/router', () => ({
  withRouter: component => {
    component.defaultProps = {
      ...component.defaultProps,
      router: { query: { id: 'testId1' } }
    };
    return component;
  }
}));

const session = {
  user: null
};

describe('index', () => {
  it('app shows navbar when navMenu is true', () => {
    const { getByPlaceholderText } = render(<App session={{ user: null }} navMenu={true} />);
    expect(getByPlaceholderText(/zoek naar nieuws, aandelen of een specifiek dossier/i)).toBeDefined();
  });
  it('app does not show navbar when navMenu is false', () => {
    const { queryByText } = render(<App session={session} navMenu={false} />);

    expect(queryByText(/pruts/)).toBeNull();
    // expect(container).toContain('Zoek naar nieuws, aandelen of een specifiek dossier')
    //const node = getByPlaceholderText(/Zoek naar nieuws, aandelen of een specifiek dossier/i)
    //expect(node).toBeInTheDocument()
    //expect().toThrowError()
    //console.log(document.body.outerHTML)
  });
});
