# ASSESSMENT 5: Ruby Coding Practical Questions

# --------------------1) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data about each bike object.

class Bike 
  attr_accessor :model, :wheels, :frame_size, :bell, :speed
  def initialize (model, frame_size)
    @model = model 
    @wheels = 2
    @frame_size = frame_size
    @bell = bell
    @speed = 0
  end

  def get_info
    "The #{model} bike has #{wheels} wheels and a #{frame_size} frame"
  end

  def ring_bell
    'Ding ding!'
  end

  def pedal_faster num
    @speed = @speed + num
  end

  def brake num
    if num > @speed
      @speed = 0
    else
      @speed -= num
    end
  end
end

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'

my_bike = Bike.new('Trek', '168cm')
p 'Problem #1'
p my_bike.get_info


# -------------------2) Add a bell to the bike class and create the ability to ring the bell when the method is called.

# Expected output example: my_bike.ring_bell => 'Ding ding!'
 p 'Problem #2'
 p my_bike.ring_bell

# -------------------3) Add a speedometer to the Bike class. The speed should be initialized at 0.

# Expected output example: my_bike.speed => 0

p 'Problem #3'
p my_bike.speed


# -------------------4) Add the ability to pedal faster. The pedal_faster method should increase the speed by a particular amount.

# Expected output example: my_bike.pedal_faster 10 => 10

p 'Problem #4'
p my_bike.pedal_faster 10

# -------------------5) Add the ability to brake. The brake method should decrease the speed by a particular amount. The bike cannot go negative speeds.

# Expected output example: my_bike.brake 15 => 0

p 'Problem #5'
p my_bike.brake 15