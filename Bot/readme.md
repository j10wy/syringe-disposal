# Syringe Disposal Bot

### Intents
Dialogflow uses intents to categorize a user's intentions. Dialogflow intents have training phrases, which are examples of what a user might say to an agent (aka bot). Dialogflow uses training phrases as examples for a machine learning model to match users' queries to the correct intent. The machine learning model checks the query against every intent in the agent, provides a score for each intent, and then matches the highest scoring intent.

#### Default Fallback Intent
* The agent matches the default fallback intent when the it does not understand the the user says.
* The fallback intent is matched when the highest scoring intent has a very low score.

#### Intent Parameters

* Parameters are important/relevanet words or phrases in a user' query that are extracted so your agent can provide the user with the proper response.
* Parameters can be used in the agent's response to a user


### Entities
