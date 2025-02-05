export type Note = {
    id: string;
    title: string;
    content: string;
    lastModified: string;
};

export const fakeNotes: Note[] = [
    {
        id: '1',
        title: 'Understanding JavaScript Closures',
        content: 'Closures are a fundamental concept in JavaScript. They are created whenever a function is created, allowing the function to access variables from the scope in which it was created. In other words, a closure is the combination of a function and the lexical environment within which that function was declared. Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data. This has obvious parallels to object-oriented programming, where objects allow us to associate some data (the object’s properties) with one or more methods. Closures are useful in many ways...',
        lastModified: new Date().toISOString()
    },
    {
        id: '2',
        title: 'Introduction to React Hooks',
        content: 'React Hooks are a new addition to React 16.8 that let you use state and other React features without writing a class. Hooks are functions that let you "hook into" React state and lifecycle features from function components. The two most commonly used hooks are useState and useEffect. The useState hook lets you add state to function components, and the useEffect hook lets you perform side effects in function components. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to extract and share logic as a custom Hook. For example...',
        lastModified: new Date().toISOString()
    },
    {
        id: '3',
        title: 'Getting Started with TypeScript',
        content: 'TypeScript is a superset of JavaScript that adds static types. This allows developers to catch errors early in the development process, leading to more robust and maintainable code. TypeScript files use the .ts extension and can be compiled to JavaScript using the TypeScript compiler. Some of the key features of TypeScript include static type-checking, classes, interfaces, and modules. By providing a static type system on top of JavaScript, TypeScript makes it easier to manage large codebases and improves the overall developer experience. To get started with TypeScript...',
        lastModified: new Date().toISOString()
    },
    {
        id: '4',
        title: 'Mastering CSS Grid Layout',
        content: 'CSS Grid Layout is a powerful layout system available in CSS. It allows developers to create complex layouts on the web using a two-dimensional grid-based approach. Grid Layout enables you to align and distribute space among items in a container. You can define the structure of the grid using rows and columns, and place items into grid cells or areas. The properties used in Grid Layout include grid-template-columns, grid-template-rows, grid-template-areas, grid-column, grid-row, and many more. With CSS Grid, creating responsive designs becomes much easier and more intuitive. Let’s dive into...',
        lastModified: new Date().toISOString()
    },
    {
        id: '5',
        title: 'Effective Project Management Strategies',
        content: 'Project management involves planning, organizing, and managing resources to achieve specific goals. Effective project management strategies are essential for the success of any project. These strategies include clear goal setting, effective communication, risk management, and continuous monitoring and evaluation. By setting clear goals, teams can stay focused and aligned. Effective communication ensures that all stakeholders are on the same page. Risk management involves identifying potential risks and developing mitigation plans. Continuous monitoring and evaluation help track progress and make necessary adjustments. To implement these strategies...',
        lastModified: new Date().toISOString()
    },
    {
        id: '6',
        title: 'Advanced SQL Queries and Techniques',
        content: 'SQL (Structured Query Language) is a powerful tool used to interact with relational databases. Advanced SQL queries and techniques allow you to perform complex data manipulations and analyses. These techniques include subqueries, joins, window functions, and common table expressions (CTEs). Subqueries are nested queries that allow you to perform complex operations. Joins enable you to combine data from multiple tables based on related columns. Window functions provide a way to perform calculations across a set of table rows related to the current row. Common table expressions (CTEs) allow you to create temporary result sets that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement. By mastering these advanced SQL techniques...',
        lastModified: new Date().toISOString()
    },
    {
        id: '7',
        title: 'The Future of Artificial Intelligence',
        content: 'Artificial intelligence (AI) is rapidly transforming various industries and aspects of our daily lives. The future of AI holds immense potential, with advancements in machine learning, natural language processing, and computer vision. AI systems are becoming more capable and efficient, enabling new applications and use cases. Some of the key trends in AI include the development of explainable AI, increased adoption of AI in healthcare, and the rise of autonomous systems. Explainable AI aims to make AI decisions more transparent and understandable. In healthcare, AI is being used for diagnostics, treatment planning, and personalized medicine. Autonomous systems, such as self-driving cars and drones, are becoming more prevalent. As AI continues to evolve...',
        lastModified: new Date().toISOString()
    },
    {
        id: '8',
        title: 'Exploring the World of Quantum Computing',
        content: 'Quantum computing is an emerging field that leverages the principles of quantum mechanics to perform computations. Unlike classical computers, which use bits to represent data as 0s and 1s, quantum computers use quantum bits or qubits. Qubits can exist in multiple states simultaneously, thanks to the principle of superposition. This allows quantum computers to perform certain calculations much faster than classical computers. Quantum computing has the potential to revolutionize various fields, including cryptography, optimization, and drug discovery. However, the technology is still in its early stages, and there are many challenges to overcome. Researchers are working on developing stable qubits, error correction methods, and practical applications for quantum computing. As the field progresses...',
        lastModified: new Date().toISOString()
    },
    {
        id: '9',
        title: 'Building Scalable Web Applications',
        content: 'Scalability is a critical aspect of web application development. Building scalable web applications ensures that your application can handle increasing traffic and user demands without compromising performance. Key strategies for achieving scalability include load balancing, caching, and database optimization. Load balancing distributes incoming traffic across multiple servers, preventing any single server from becoming a bottleneck. Caching stores frequently accessed data in memory, reducing the load on the database and improving response times. Database optimization involves indexing, query optimization, and using read replicas to improve database performance. By implementing these strategies...',
        lastModified: new Date().toISOString()
    },
    {
        id: '10',
        title: 'Understanding Cybersecurity Best Practices',
        content: 'Cybersecurity is the practice of protecting computer systems, networks, and data from cyber threats. With the increasing prevalence of cyber attacks, it is essential to implement cybersecurity best practices to safeguard sensitive information. Some key best practices include using strong and unique passwords, enabling two-factor authentication, regularly updating software and systems, and training employees on security awareness. Strong passwords make it difficult for attackers to gain unauthorized access. Two-factor authentication adds an extra layer of security by requiring a second form of verification. Regular updates ensure that systems are protected against known vulnerabilities. Security awareness training educates employees on how to recognize and respond to potential threats. By following these best practices...',
        lastModified: new Date().toISOString()
    }
];