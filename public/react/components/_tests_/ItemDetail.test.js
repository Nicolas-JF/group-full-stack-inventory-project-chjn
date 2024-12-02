import { render, screen, fireEvent } from '@testing-library/react';
import { ItemDetail } from '../itemDetailtemDetail'; // Adjust the import path if needed
import '@testing-library/jest-dom/extend-expect'; // for jest-dom matchers

describe('ItemDetail Component', () => {
  const mockHandleBack = jest.fn();
  const mockSetShowModal = jest.fn();
  const mockFetchItems = jest.fn();

  const sampleItem = {
    id: 1,
    name: 'Sample Item',
    description: 'This is a sample item.',
    price: 100.0,
    category: 'electronics',
    image: 'https://example.com/sample.jpg',
  };

  it('should display item details', () => {
    render(
      <ItemDetail
        item={sampleItem}
        setSelectedItem={jest.fn()}
        handleBack={mockHandleBack}
        setShowModal={mockSetShowModal}
        setShowAll={jest.fn()}
        fetchItems={mockFetchItems}
      />
    );

    expect(screen.getByText('Sample Item')).toBeInTheDocument();
    expect(screen.getByText('Description: This is a sample item.')).toBeInTheDocument();
    expect(screen.getByText('Price: $100')).toBeInTheDocument();
    expect(screen.getByText('Category: electronics')).toBeInTheDocument();
  });

  it('should call handleBack when "Back" button is clicked', () => {
    render(
      <ItemDetail
        item={sampleItem}
        setSelectedItem={jest.fn()}
        handleBack={mockHandleBack}
        setShowModal={mockSetShowModal}
        setShowAll={jest.fn()}
        fetchItems={mockFetchItems}
      />
    );

    const backButton = screen.getByText(/Back/i);
    fireEvent.click(backButton);

    expect(mockHandleBack).toHaveBeenCalledTimes(1);
  });

  it('should call setShowModal when "Edit" button is clicked', () => {
    render(
      <ItemDetail
        item={sampleItem}
        setSelectedItem={jest.fn()}
        handleBack={mockHandleBack}
        setShowModal={mockSetShowModal}
        setShowAll={jest.fn()}
        fetchItems={mockFetchItems}
      />
    );

    const editButton = screen.getByText(/Edit/i);
    fireEvent.click(editButton);

    expect(mockSetShowModal).toHaveBeenCalledTimes(1);
  });
});
