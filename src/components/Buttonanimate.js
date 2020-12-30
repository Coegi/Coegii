import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

 const Buttonanimate = () => {
    return (
        <div>
             <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
        </div>
    )
}

export default Buttonanimate