import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchComponent from '../components/SearchComponent';

const mockData = ['Binary Search', 'Quick Sort', 'Merge Sort', 'Heap', 'Graph'];

describe('SearchComponent', () => {
  const mockOnSearch = jest.fn(); // Mock the onSearch callback

  test('renders input and list', () => {
    render(<SearchComponent data={mockData} onSearch={mockOnSearch} />);
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('search-results')).toBeInTheDocument();
  });

  test('displays all items initially', () => {
    render(<SearchComponent data={mockData} onSearch={mockOnSearch} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(mockData.length);
  });

  test('filters results based on input', () => {
    render(<SearchComponent data={mockData} onSearch={mockOnSearch} />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'sort' } });
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent('Quick Sort');
    expect(listItems[1]).toHaveTextContent('Merge Sort');
  });

  test('displays "No results found" when no match is found', () => {
    render(<SearchComponent data={mockData} onSearch={mockOnSearch} />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'xyz' } });
    const listItem = screen.getByRole('listitem');
    expect(listItem).toHaveTextContent('No results found');
  });

  test('displays all items again when input is cleared', () => {
    render(<SearchComponent data={mockData} onSearch={mockOnSearch} />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'graph' } });
    expect(screen.getAllByRole('listitem').length).toBe(1);

    fireEvent.change(input, { target: { value: '' } });
    expect(screen.getAllByRole('listitem').length).toBe(mockData.length);
  });
});
