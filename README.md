# Chat Your Journal

Chat Your Journal is a Node.js application that allows you to ask questions about your personal journal using natural language processing. It uses OpenAI's GPT-3 to convert your queries into embeddings and then summarizes the response.

This project was inspired by [@pwang_szn](https://twitter.com/pwang_szn) and their use of [@LangChainAI](https://twitter.com/LangChainAI).

## Installation

To install the necessary dependencies, run the following command:

```
npm install
```

## Usage

1. Create a text file named `journal.txt` in the root directory of the project.
2. Compile the TypeScript file into JavaScript by running the following command:

   ```
   tsc main.ts
   ```

3. Run the following command to start the application:

   ```
   node main.js
   ```

4. Open your web browser and navigate to `http://localhost:3000`.
5. Type your question in the input field and press "Enter" or click the "Ask" button.
6. The application will generate a summary of the relevant information from your journal. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

-  [@pwang_szn](https://twitter.com/pwang_szn) for the inspiration.
-  [@LangChainAI](https://twitter.com/LangChainAI) for the natural language processing capabilities.
-  [OpenAI](https://openai.com/) for their GPT-3 model.

## TODO

- [ ] Fix errors: `Cannot find module... or its corresponding type declarations`