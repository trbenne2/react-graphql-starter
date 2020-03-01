GraphQL- yoga docs(github.com/prisma-labs/graphql-yoga)
This uses queries and mutations.
Sometime keep mutations in a mutations folder within the resolvers folder
app.graphql will hold schema (title: String! <- ! means that non-nullable).
Resolvers take at least 2 args: The parent and the args object

App will show messages and users add messages. DB will be a array of objects. Objects represent blog posts and when a user adds a new blog post push to array. Need query to fetch all data and mutation in order to modift data and add new message to existing message

Commands:
npx creater-react-app client
yarn add apollo-boost react-apollo graphql
yarn init -y
yarn add graphql-yoga
touch index.js
yarn add graphql-tag
