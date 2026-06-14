import ProjectApi from "./projectapi"

import { PUBLIC_STUDIO_URL } from "$env/static/public";

export default {
    /**
     * JetPortal's normal page
     */
    base: `${PUBLIC_STUDIO_URL}/`,

    /**
     * JetPortal's editor page
     */
    editor: `${PUBLIC_STUDIO_URL}/editor.html`,

    /**
     * JetPortal's credits page
     */
    credits: `${PUBLIC_STUDIO_URL}/credits.html`,
    
    /**
     * JetPortal's contact page
     */
    contact: `${PUBLIC_STUDIO_URL}/contact.html`,

    /**
     * JetPortal's terms of service page
     */
    terms: "/terms",

    /**
     * JetPortal's privacy policy page
     */
    privacy: "/privacy",

    /**
     * JetPortal's guideline pages for services
     */
    guidelines: {
        /**
         * JetPortal's project uploading guidelines
         */
        projects: `${PUBLIC_STUDIO_URL}/PenguinMod-Guidelines/PROJECTS`
    },

    /**
     * Donation pages for sites
     */
    donate: {
        scratch: "https://www.scratchfoundation.org/donate",
        turbowarp: "https://github.com/sponsors/GarboMuffin"
    },

    /**
     * JetPortal's project page
     */
    projects: `${ProjectApi.OriginApiUrl}/`,

    /**
     * JetPortal's my stuff page
     */
    mystuff: `${ProjectApi.OriginApiUrl}/mystuff`,

    /**
     * JetPortal's home page
     */
    home: "https://penguinmod.com/",

    /**
     * JetPortal's packager page
     */
    packager: `${PUBLIC_STUDIO_URL}/PenguinMod-Packager/`,

    /**
     * JetPortal's unofficial wiki
     */
    wiki: "https://wiki.penguinmod.com/wiki/Main_Page",

    /**
     * JetPortal's Discord invite
     */
    discord: "https://discord.gg/NZ9MBMYTZh",

    /**
     * Scratch's website
     */
    scratch: "https://scratch.mit.edu",

    /**
     * TurboWarp's website
     */
    turbowarp: "https://turbowarp.org",

    /**
     * JetPortal's github page
     */
    github: "https://github.com/PenguinMod/",

    /**
     * JetPortal's basic API
     */
    basicApi: "https://penguinmod-basic-api.derpygamer2142.com/",

    /**
     * The admin panel for pm projects api
     */
    adminPanel: "https://penguinmod.com/panel"
}
