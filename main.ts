// use LangChain to chat with my journal

import * as fs from "fs";
import { VectorDBQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings";
import { OpenAI } from "langchain/llms";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { HNSWLib } from "langchain/vectorstores";

export const main = async () => {
	const model = new OpenAI ({}) ;

	const text = fs. readFileSync("journal.txt", "utf8");
	const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
	const docs = await textSplitter.createDocuments ([text]);

	const vectorStore = await HNSWLib. fromDocuments (docs, new OpenAIEmbeddings ()) ;
	const qaChain = VectorDBQAChain.fromLLM(model, vectorStore);

	const answer = await qaChain. call({
		input_documents: docs, 
		query: "You are a financial analyst for Microsoft. What is their key risk factors?",
	});

console. log(answer)
};
