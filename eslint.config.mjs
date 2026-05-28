import nextPluggin from "@next/eslint-plugin-next"


export default [
    {
        plugins:{
            "@next/next": nextPlugin,
        },
        rules:{
            "react/no-unescaped-entitites":"off",
            "@next/next/no-img-element":"off",
            "no-unused-vars":"warn",
        }
    }
]