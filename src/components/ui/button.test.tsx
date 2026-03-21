import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("renderiza o rótulo e responde a clique", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button type="button" onClick={onClick}>
        Salvar
      </Button>
    );

    const btn = screen.getByRole("button", { name: /salvar/i });
    expect(btn).toBeInTheDocument();

    await user.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("fica inerte quando disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button type="button" disabled onClick={onClick}>
        Bloqueado
      </Button>
    );

    await user.click(screen.getByRole("button", { name: /bloqueado/i }));
    expect(onClick).not.toHaveBeenCalled();
  });
});
