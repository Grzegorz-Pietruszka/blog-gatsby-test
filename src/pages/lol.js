import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Lol = () => (
    <Layout>
      <SEO title={'lol'} />
      <div>
        Sasin rozpierdolił 70 mln publicznych pieniędzy i za to nie odpowiedział
      </div>

      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link
        activeStyle={{color: 'red'}}
        to="/lol/">go for lolz</Link> <br />
      <Link to="/anotherLolz/">another lolz</Link>
    </Layout>
)

export default Lol
