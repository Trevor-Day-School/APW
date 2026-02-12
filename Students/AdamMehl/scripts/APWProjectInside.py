import pygame as py

# pygame setup
py.init()
screen = py.display.set_mode((1280, 720))
clock = py.time.Clock()
running = False
startButton = False


# maybe input a code for progression?
if input("Are you ready? (y/n) ") == "y":
    running = True



# sprite class

class Player(py.sprite.Sprite):
    def __init__(self):
        super().__init__()  # call the parent class (Sprite) constructor
        self.image = py.Surface((50, 50))
        self.image.fill("blue")
        self.rect = self.image.get_rect(center=(640, 360))
        self.x = 100
        self.y = 100
        py.Rect(self.x, self.y, 50, 50)
        

    def update(self):
        self.show()
        self.pressed = py.key.get_pressed()
        self.movement()

    def show(self):
        screen.blit(self.image, self.rect)

    def movement(self):
        if self.pressed[py.K_LEFT]:
            self.rect.x -= 5
        if self.pressed[py.K_RIGHT]:
            self.rect.x += 5
        if self.pressed[py.K_UP]:
            self.rect.y -= 5
        if self.pressed[py.K_DOWN]:
            self.rect.y += 5
    def startGame():
        sprite = Player()
        sprite.update()

class Button():
    def __init__(self, image=py.Surface((200, 100))):
        self.startButton = False
        self.x = 5
        self.y = 50
        self.button_clicked = False
        self.button_image = image

    def update(self):
        screen.blit(self.button_image, (self.x, self.y))

        if py.mouse.get_pressed()[0] and not self.button_clicked:
            if self.clicked_button(py.mouse.get_pos()):
                self.button_clicked = True
        if not py.mouse.get_pressed()[0]:
            self.button_clicked = False


    def clicked_button(self, mouse):
        # checks if the mouse is inside the image
        # if img_x + width > x > img_x & img_y + length > y > img_y:
        if self.x <= mouse[0] <= self.x + self.startbutton_image.get_width() and self.y <= mouse[1] <= self.y + self.startbutton_image.get_height():
            # mouse is touching upgrade button
            return True
    
class StartGame(Button):
    def __init__(self):
        super().__init__()
        self.startbutton_image = py.image.load("Students/AdamMehl/images/startbutton.png").convert_alpha()
 
        self.startButton = False
        self.x = 590
        self.y = 300
    def update(self):
        super().update()
        if self.startButton:
            self.startGame()
        

while running:
    # poll for events
    # pygame.QUIT event means the user clicked X to close your window
    for event in py.event.get():
        if event.type == py.QUIT:
            running = False

    # fill the screen with a color to wipe away anything from last frame
    screen.fill("purple")

    startgame = StartGame(py.image.load("Students/AdamMehl/images/startbutton.png").convert_alpha())
    startgame.update()

    # RENDER YOUR GAME HERE

    # flip() the display to put your work on screen
    py.display.flip()

    clock.tick(60)  # limits FPS to 60

py.quit()