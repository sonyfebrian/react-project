import { describe, it, expect, vi } from "vitest";
import { render } from "src/utils/test-utils";
import { fireEvent } from "@testing-library/react";
import ButtonUi from "./Button";
import ModalUi from "./ModalUi";

describe("ButtonUi component", () => {
  it("renders ButtonUi component with provided props", () => {
    const mockText = "Click me";
    const { getByText } = render(
      <ButtonUi mt={5} colorScheme="blue">
        {mockText}
      </ButtonUi>
    );

    const button = getByText(mockText);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle("margin-top: 5px");
    expect(button).toHaveClass("chakra-button");
  });

  it("renders ButtonUi component with default props when not provided", () => {
    const mockText = "Submit";
    const { getByText } = render(<ButtonUi>{mockText}</ButtonUi>);

    const button = getByText(mockText);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle("margin-top: 4px");
    expect(button).toHaveClass("chakra-button");
  });
});

describe("ModalUi component", () => {
  const userDetailsMock = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };

  it("renders ModalUi component and checks initial state", () => {
    const onCloseMock = vi.fn();
    const handleDeleteUserMock = vi.fn();

    const { getByText } = render(
      <ModalUi
        isOpen={true}
        onClose={onCloseMock}
        userDetails={userDetailsMock}
        handleDeleteUser={handleDeleteUserMock}
      />
    );

    const userHeader = getByText("User Details");
    expect(userHeader).toBeInTheDocument();

    const userId = getByText(`Id: ${userDetailsMock.id}`);
    expect(userId).toBeInTheDocument();
  });

  it("triggers onClose and handleDeleteUser functions when buttons are clicked", () => {
    const onCloseMock = vi.fn();
    const handleDeleteUserMock = vi.fn();

    const { getByText } = render(
      <ModalUi
        isOpen={true}
        onClose={onCloseMock}
        userDetails={userDetailsMock}
        handleDeleteUser={handleDeleteUserMock}
      />
    );

    // Trigger click on the "Close" button
    const closeButton = getByText("Close");
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();

    // Trigger click on the "Delete User" button
    const deleteUserButton = getByText("Delete User");
    fireEvent.click(deleteUserButton);
    expect(handleDeleteUserMock).toHaveBeenCalled();
  });

  // Add more specific tests based on your component behavior and expectations
});
