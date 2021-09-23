import renderer from 'react-test-renderer';
import Stack from '@mui/material/Stack';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@material-ui/core/Button';

describe('ClearButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <>
        <Stack><Button /></Stack>
      </>,
    );
    expect(tree).toMatchSnapshot();
  });
});

test('1. ClearButton Rendering', () => {
  let buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(0);
  render(<Button type="button" />);
  buttons = document.getElementsByTagName('button');
  expect(buttons.length).toBe(1);
});

test('2. Handles onClick', () => {
  const onClick = jest.fn();
  render(<Button type="button" onClick={onClick}/>);
  const btnElement = screen.getByRole('button');
  fireEvent.click(btnElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
