import renderer from 'react-test-renderer';
import Stack from '@mui/material/Stack';
import { render } from '@testing-library/react';
import Button from '@material-ui/core/Button';

describe('PlayButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <>
        <Stack><Button /></Stack>
      </>
    );
    expect(tree).toMatchSnapshot();
  });
});

test('1. PlayButton Rendering', () => {
  let buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(0);
  render(<Button type="button" />);
  buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(1);
});
