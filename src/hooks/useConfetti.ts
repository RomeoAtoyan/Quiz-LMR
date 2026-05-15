import confetti from "canvas-confetti";
import { useEffect } from "react";

/**
 * Custom hook to trigger a looping confetti celebration.
 * @param active - Whether the confetti should be currently firing.
 */
export const useConfetti = (active: boolean) => {
  useEffect(() => {
    if (active) {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        colors: ["#F43F5E", "#3B82F6", "#EC4899", "#8B5CF6", "#ffffff"],
        zIndex: 1000,
      };

      const fire = (particleRatio: number, opts: any) => {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      };

      const trigger = () => {
        // Center Cannon (multi-layered)
        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });

        // Left Side Cannon
        confetti({
          ...defaults,
          particleCount: 150,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 1 },
          startVelocity: 70,
        });

        // Right Side Cannon
        confetti({
          ...defaults,
          particleCount: 150,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 1 },
          startVelocity: 70,
        });
      };

      trigger();
    }
  }, [active]);
};
