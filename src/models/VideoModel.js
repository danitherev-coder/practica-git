import { DataTypes } from 'express'
import db from '../config/db.postgres.js'

const VideoModel = db.define('video', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    video_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    published: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

export default VideoModel