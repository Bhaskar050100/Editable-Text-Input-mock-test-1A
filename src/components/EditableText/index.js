import {Component} from 'react'

import {
  BgContainer,
  BgSubContainer,
  Heading,
  EditableContainer,
  UserInput,
  Button,
  Description,
} from './styledComponents'

class EditableText extends Component {
  state = {
    isButtonClicked: false,
    EditableTxt: '',
  }

  onChangeEditableText = event => {
    this.setState({EditableTxt: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {EditableTxt, isButtonClicked} = this.state
    const EditSaveButton = isButtonClicked ? 'Edit' : 'Save'
    return (
      <BgContainer>
        <BgSubContainer>
          <Heading>Editable Text Input</Heading>
          <EditableContainer>
            {isButtonClicked ? (
              <Description>{EditableTxt}</Description>
            ) : (
              <UserInput
                type="text"
                value={EditableTxt}
                onChange={this.onChangeEditableText}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {EditSaveButton}
            </Button>
          </EditableContainer>
        </BgSubContainer>
      </BgContainer>
    )
  }
}

export default EditableText
