class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    handlehi = () => {
        const message = this.createChatBotMessage(
          "Hello! How can I assist you today?"
        );
        this.updateChatbotState(message);
      };
    // ✅ Menu
    handleMenu = () => {
      const message = this.createChatBotMessage(
        "Our menu includes burgers, pizzas, fries, and desserts. Would you like to know more about a specific item?"
      );
      this.updateChatbotState(message);
    };
  
    // ✅ Operating Hours
    handleHours = () => {
      const message = this.createChatBotMessage(
        "Our hours of operation are 7:00 PM to 4:00 AM every day."
      );
      this.updateChatbotState(message);
    };
  
    // ✅ Order Assistance
    handleOrder = () => {
      const message = this.createChatBotMessage(
        "You can place an order directly through our app or website!"
      );
      this.updateChatbotState(message);
    };
  
    // ✅ Today's Special Dish
    handleSpecialDish = () => {
      const message = this.createChatBotMessage(
        "Today's special dish is 'Spicy Chicken Burger' with extra cheese and fries!"
      );
      this.updateChatbotState(message);
    };
  
    // ✅ Ingredients of a Dish
    handleIngredients = () => {
      const message = this.createChatBotMessage(
        "Our Spicy Chicken Burger includes: grilled chicken, lettuce, tomatoes, mayo, cheese, and a special spicy sauce."
      );
      this.updateChatbotState(message);
    };
  
    // ✅ Popular Dishes
    handlePopularDishes = () => {
      const message = this.createChatBotMessage(
        "Our most popular dishes are: BBQ Chicken Pizza, Spicy Chicken Burger, and Loaded Fries."
      );
      this.updateChatbotState(message);
    };
  
    // ✅ Default Response
    handleDefault = () => {
      const message = this.createChatBotMessage(
        "I'm sorry, I didn't quite get that. Can you try rephrasing your question?"
      );
      this.updateChatbotState(message);
    };
  
    // ✅ Function to update chatbot state
    updateChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  