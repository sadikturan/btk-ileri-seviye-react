import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UserProfile from "../components/UserProfile";
import "@testing-library/jest-dom/vitest";

describe("UserProfile", () => {
  it("fetch data and display the user data", async () => {
    render(<UserProfile userId={1} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /leanne/i })
      ).toBeInTheDocument();

      expect(screen.getByText(/sincere@april.biz/i)).toBeInTheDocument();
    });
  });
});
