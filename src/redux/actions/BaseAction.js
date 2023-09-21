// Export All Base Action Functions
export const BaseAction = {
    success,
  };
  
  
  /**
   *
   * @param type
   * @param data
   */
  function success (type, data) {
    return {
      type,
      data
    };
  };
  
  