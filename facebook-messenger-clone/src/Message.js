// es7 snippet extension
import React, {forwardRef} from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './message.css';

const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message_User'}`}>
            <Card className={isUser ? "messageUser" : "messageCard"}>
             <CardContent>
              <Typography
                color="white"
                variant="h5"
                component="h2"
              >
            {!isUser && `${message.username || 'Unknown User'} says : `}{message.message}
              </Typography>
             </CardContent>
            </Card>
        </div>
    )
})

export default Message
