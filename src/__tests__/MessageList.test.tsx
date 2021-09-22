import renderer from 'react-test-renderer';
import ClearButton from '../components/ClearButton';
import PlayButton from '../components/ClearButton';


describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <>
        <ClearButton clear={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <>
        <PlayButton clear={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </>,
    );
    expect(tree).toMatchSnapshot();
  });
});
