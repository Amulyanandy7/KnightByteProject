class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hi")) {
        this.actionProvider.handlehi();
      } 
      // Menu
      else if (lowerCaseMessage.includes(" what is in the menu")) {
        this.actionProvider.handleMenu();
      } 
      // Operating Hours
      else if (lowerCaseMessage.includes(" opening hours") || lowerCaseMessage.includes("opening hours") || lowerCaseMessage.includes("closing hours")) {
        this.actionProvider.handleHours();
      } 
      // Order Assistance
      else if (lowerCaseMessage.includes("what is in my order")) {
        this.actionProvider.handleOrder();
      } 
      // Today's Special Dish
      else if (lowerCaseMessage.includes("what are today's special") || lowerCaseMessage.includes("special dish")) {
        this.actionProvider.handleSpecialDish();
      } 
      // Ingredients of a Dish
      else if (lowerCaseMessage.includes("ingredients") || lowerCaseMessage.includes("what's in") || lowerCaseMessage.includes("what are the ingredients")) {
        this.actionProvider.handleIngredients();
      } 
      // Popular Dishes
      else if (
        lowerCaseMessage.includes("popular dishes") ||
        lowerCaseMessage.includes("famous dishes") ||
        lowerCaseMessage.includes("best dishes")
      ) {
        this.actionProvider.handlePopularDishes();
      } 
      // Default Response
      else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;
  