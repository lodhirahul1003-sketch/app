/**
 * Utility for haptic feedback using the Web Vibration API.
 * Provides different patterns for different types of interactions.
 */

export const hapticFeedback = {
  /**
   * Light tap for standard button presses.
   */
  light: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  },

  /**
   * Medium impact for important actions or successful operations.
   */
  medium: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(20);
    }
  },

  /**
   * Heavy impact for critical actions or errors.
   */
  heavy: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([30, 50, 30]);
    }
  },

  /**
   * Success pattern (double tap).
   */
  success: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([10, 30, 10]);
    }
  },

  /**
   * Error pattern (triple tap).
   */
  error: () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([50, 100, 50, 100, 50]);
    }
  }
};
