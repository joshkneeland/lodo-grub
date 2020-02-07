import React from 'react';
import './siteHeader.scss';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const SiteHeader = () => {

    const pageVariants = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
            transition: {
                duration: 1
            },
        },
        out: {
            opacity: 0,
            transition: {
                delay: 5,
                duration: 5,
                when: "afterChildren",
                staggerChildren: 2
            },
        }
    };

    const contentVariants = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.5
            },
        },
        out: {
            opacity: 0,
            transition: {
                when: "beforeChildren",
                duration: 0.5,
                delay: 2
            },
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="site-header">
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={contentVariants}>
                <div className="site-header-title-wrap">
                    <h1>Lodogrub.com</h1>
                </div>
                <div className="site-header-body-wrap">
                    <p>With all of the restaurant choices in the downtown Denver area, it can be tough to pick a spot to eat at!</p>
                    <p>So this site takes all of the guess work out for you.</p>
                    <p>
                        <NavLink exact to="/questions" activeClassName="active">Find your restaurant</NavLink>
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default SiteHeader;