local CoreGui = cloneref(game:GetService('CoreGui'))
local HttpService = cloneref(game:GetService('HttpService'))
local TweenService = cloneref(game:GetService('TweenService'))

local Ui = {}
local Settings = {}
local Saves = {}
if not isfolder("Executioner") then
    makefolder("Executioner")
end
if not isfile("Executioner/"..tostring(game.PlaceId) .."Settings.json") then
    writefile("Executioner/"..tostring(game.PlaceId) .."Settings.json","{}")
end
pcall(function()    
    if isfile("Executioner/"..tostring(game.PlaceId) .."Settings.json") then
    Saves = HttpService:JSONDecode(readfile("Executioner/"..tostring(game.PlaceId) .."Settings.json"))
    end
end)
function SaveSettings()
    writefile("Executioner/"..tostring(game.PlaceId) .."Settings.json", HttpService:JSONEncode(Settings))
end
function Ui:Load(Name)
Name = Name or "HubName"
if CoreGui:FindFirstChild(Name) then
    CoreGui:FindFirstChild(Name):Destroy()
end
function Ui:Set(bool,i,name1)
    if bool == false then
        TweenService:Create(i,TweenInfo.new(0.25),{BackgroundColor3 = Color3.fromRGB(252, 48, 3)}):Play()
    else
        TweenService:Create(i,TweenInfo.new(0.25),{BackgroundColor3 = Color3.fromRGB(0, 186, 21)}):Play()
    end
    Settings[name1] = bool
    SaveSettings()
end

local ScreenGui = Instance.new("ScreenGui", CoreGui)
local Main = Instance.new("Frame")
local Topbar = Instance.new("TextLabel")
local OpenClose = Instance.new("ImageButton")
local Tabs = Instance.new("ScrollingFrame")
local TabButtons = Instance.new("Frame")
local TabListLayout = Instance.new("UIListLayout")
local PageContainer = Instance.new("Folder")
local on = false

ScreenGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
ScreenGui.Name = Name

Main.Name = "Main"
Main.Parent = ScreenGui
Main.BackgroundColor3 = Color3.fromRGB(18, 18, 18)
Main.BorderSizePixel = 0
Main.Position = UDim2.new(0.261832356, 0, 0.310139179, 0)
Main.Size = UDim2.new(0, 496, 0, 320)
Main.ClipsDescendants = true


local UserInputService = cloneref(game:GetService("UserInputService"))

        local gui = Main
	local gui2 = OpenClose

        local dragging = false
	local dragging2 = false
	local dragInput = nil
	local dragStart = nil
	local startPos = nil
	local dragInput2 = nil
	local dragStart2 = nil
	local startPos2 = nil

        local function update(input)
        	local delta = input.Position - dragStart
        	gui.Position = UDim2.new(startPos.X.Scale, startPos.X.Offset + delta.X, startPos.Y.Scale, startPos.Y.Offset + delta.Y)
        end

	local function update2(input)
		local delta2 = input.Position - dragStart2
		gui2.Position = UDim2.new(startPos2.X.Scale, startPos2.X.Offset + delta2.X, startPos2.Y.Scale, startPos2.Y.Offset + delta2.Y)
        end

        gui.InputBegan:Connect(function(input)
        	if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
        		dragging = true
        		dragStart = input.Position
        		startPos = gui.Position
        		
        		input.Changed:Connect(function()
        			if input.UserInputState == Enum.UserInputState.End then
        				dragging = false
        			end
        		end)
        	end
        end)

	gui2.InputBegan:Connect(function(input)
        	if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
        		dragging2 = true
        		dragStart2 = input.Position
        		startPos2 = gui2.Position
        		
        		input.Changed:Connect(function()
        			if input.UserInputState == Enum.UserInputState.End then
        				dragging2 = false
        			end
        		end)
        	end
        end)

        gui.InputChanged:Connect(function(input)
        	if input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch then
        		dragInput = input
        	end
        end)

        gui2.InputChanged:Connect(function(input)
        	if input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch then
        		dragInput2 = input
        	end
        end)

        UserInputService.InputChanged:Connect(function(input)
        	if input == dragInput and dragging then
        		update(input)
		elseif input == dragInput2 and dragging2 then
			update2(input)
        	end
        end)

Topbar.Name = "Topbar"
Topbar.Parent = Main
Topbar.BackgroundColor3 = Color3.fromRGB(35, 35, 35)
Topbar.ZIndex = 2
Topbar.BorderSizePixel = 0
Topbar.Position = UDim2.new(-0.002, 0,0.019, 0)
Topbar.Size = UDim2.new(0, 497,0, 26)
Topbar.Font = Enum.Font.SourceSansBold
Topbar.Text = Name
Topbar.TextColor3 = Color3.fromRGB(255, 255, 255)
Topbar.TextSize = 25.000
Topbar.TextWrapped = true

OpenClose.Name = "Open/Close"
OpenClose.Parent = ScreenGui
OpenClose.BackgroundTransparency = 1.000
OpenClose.LayoutOrder = 8
OpenClose.Position = UDim2.new(0.325, 0, 0.15, 0)
OpenClose.Size = UDim2.new(0, 55, 0, 55)
OpenClose.ZIndex = 2
OpenClose.Image = "rbxassetid://5430597512"
OpenClose.MouseButton1Click:Connect(function()
	if not dragging2 then
		on = not on
		if on == true then
			Main.Visible = true
		else
			Main.Visible = false
		end
	end
end)

Tabs.Name = "Tabs"
Tabs.Parent = Main
Tabs.Active = true
Tabs.BackgroundColor3 = Color3.fromRGB(35, 35, 35)
Tabs.BorderSizePixel = 0
Tabs.Position = UDim2.new(0.0193132665, 0, 0.11881189, 0)
Tabs.Size = UDim2.new(0, 155, 0, 275)
Tabs.ScrollBarThickness = 0
Tabs.VerticalScrollBarPosition = Enum.VerticalScrollBarPosition.Left

TabButtons.Name = "TabButtons"
TabButtons.Parent = Tabs
TabButtons.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TabButtons.BackgroundTransparency = 1.000
TabButtons.Position = UDim2.new(0.174193546, 0, 0.0109374998, 0)
TabButtons.Size = UDim2.new(0, 100, 0, 100)

TabListLayout.Name = "TabListLayout"
TabListLayout.Parent = TabButtons
TabListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center
TabListLayout.SortOrder = Enum.SortOrder.LayoutOrder
TabListLayout.Padding = UDim.new(0, 6)

TabListLayout:GetPropertyChangedSignal("AbsoluteContentSize"):Connect(function()
    Tabs.CanvasSize = UDim2.new(0,0,0,TabListLayout.AbsoluteContentSize.Y+2)
end)

PageContainer.Name = "PageContainer"
PageContainer.Parent = Main


    local InsideUi = {}

    function InsideUi:CreatePage(TabName,SearchBar,IsMainPage)
        TabName = TabName or "Tab"
        SearchBar = SearchBar or false
        
        local Tab = Instance.new("TextButton")
        local Page = Instance.new("Frame")
        local Display = Instance.new("ScrollingFrame")
        local DisplayListLayout = Instance.new("UIListLayout")
        local Search = Instance.new("Frame")
        local Icon = Instance.new("ImageButton")
        local SearchBox = Instance.new("TextBox")

        if SearchBar == true then

            Tab.Name = TabName
Tab.Parent = TabButtons
Tab.BackgroundColor3 = Color3.fromRGB(15, 15, 15)
Tab.BorderSizePixel = 0
Tab.Size = UDim2.new(0, 127, 0, 35)
Tab.Font = Enum.Font.SourceSansBold
Tab.TextColor3 = Color3.fromRGB(255, 255, 255)
Tab.TextSize = 22.000
Tab.Text = TabName
Tab.MouseButton1Click:Connect(function ()
    for i , v in pairs(TabButtons:GetChildren()) do
        if v:IsA("TextButton") then
            v.BackgroundColor3 = Color3.fromRGB(15,15,15)
        end
    end
    Tab.BackgroundColor3 = Color3.fromRGB(22, 22, 22)
    TweenService:Create(Tab,TweenInfo.new(0.15,Enum.EasingStyle.Linear,Enum.EasingDirection.Out,0,false),{Size = UDim2.new(0, 121,0, 31)}):Play()
    wait(0.15)
    TweenService:Create(Tab,TweenInfo.new(0.15,Enum.EasingStyle.Linear,Enum.EasingDirection.Out,0,false),{Size = UDim2.new(0, 127, 0, 35)}):Play()
    wait(0.15)
    for i , v in pairs(PageContainer:GetChildren()) do
        v.Visible = false
    end
    Page.Visible = true
end)
PageContainer.Name = "PageContainer"
PageContainer.Parent = Main

Page.Name = TabName .. "Page"
Page.Parent = PageContainer
Page.BackgroundColor3 = Color3.fromRGB(35, 35, 35)
Page.BorderSizePixel = 0
Page.Position = UDim2.new(0.348088533, 0, 0.118749999, 0)
Page.Size = UDim2.new(0, 315, 0, 275)
Page.Visible = false
if IsMainPage == true then
    Page.Visible = true
end
Display.Name = "Display"
Display.Parent = Page
Display.Active = true
Display.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
Display.BackgroundTransparency = 1.000
Display.BorderSizePixel = 0
Display.ScrollBarImageColor3 = Color3.fromRGB(102, 102, 102)
Display.Position = UDim2.new(0, 0, 0.0255265664, 0)
Display.Size = UDim2.new(0, 315, 0, 267)
Display.ScrollBarThickness = 3

DisplayListLayout.Name = "DisplayListLayout"
DisplayListLayout.Parent = Display
DisplayListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center
DisplayListLayout.SortOrder = Enum.SortOrder.LayoutOrder
DisplayListLayout.Padding = UDim.new(0, 5)

DisplayListLayout:GetPropertyChangedSignal("AbsoluteContentSize"):Connect(function()
    Display.CanvasSize = UDim2.new(0,0,0,DisplayListLayout.AbsoluteContentSize.Y+2)
end)

Search.Name = "Search"
Search.Parent = Display
Search.BackgroundColor3 = Color3.fromRGB(15, 15, 15)
Search.BorderSizePixel = 0
Search.Position = UDim2.new(0.0223844014, 0, 0.0254545454, 0)
Search.Size = UDim2.new(0, 300, 0, 28)

Icon.Name = "Icon"
Icon.Parent = Search
Icon.BackgroundTransparency = 1.000
Icon.Size = UDim2.new(0, 29, 0, 28)
Icon.ZIndex = 2
Icon.Image = "rbxassetid://6764432408"
Icon.ImageRectOffset = Vector2.new(0, 800)
Icon.ImageRectSize = Vector2.new(50, 50)

SearchBox.Name = "SearchBox"
SearchBox.Parent = Search
SearchBox.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
SearchBox.BackgroundTransparency = 1.000
SearchBox.BorderSizePixel = 0
SearchBox.Position = UDim2.new(0.115015976, 0, 0, 0)
SearchBox.Size = UDim2.new(0, 277, 0, 28)
SearchBox.ClearTextOnFocus = false
SearchBox.Font = Enum.Font.SourceSansBold
SearchBox.PlaceholderColor3 = Color3.fromRGB(255, 255, 255)
SearchBox.PlaceholderText = "Search..."
SearchBox.Text = ""
SearchBox.TextColor3 = Color3.fromRGB(255, 255, 255)
SearchBox.TextSize = 17.000
SearchBox.TextTransparency = 0.060
SearchBox.TextWrapped = true
SearchBox.TextXAlignment = Enum.TextXAlignment.Left

SearchBox:GetPropertyChangedSignal("Text"):Connect(function()
    local text = SearchBox.Text:lower()
        for i, v in pairs(Display:GetChildren())do
            if v:IsA("GuiObject")  then
                if string.find(v.Name:lower(),text) then 
                    v.Visible = true
                elseif v.Name ~= "Search" then
                    v.Visible = false
                end
            end
        end
    end)

        else


            Tab.Name = TabName
Tab.Parent = TabButtons
Tab.BackgroundColor3 = Color3.fromRGB(15, 15, 15)
Tab.BorderSizePixel = 0
Tab.Size = UDim2.new(0, 127, 0, 35)
Tab.Font = Enum.Font.SourceSansBold
Tab.TextColor3 = Color3.fromRGB(255, 255, 255)
Tab.TextSize = 22.000
Tab.Text = TabName
Tab.MouseButton1Click:Connect(function ()
    for i , v in pairs(TabButtons:GetChildren()) do
        if v:IsA("TextButton") then
            v.BackgroundColor3 = Color3.fromRGB(15,15,15)
        end
    end
    Tab.BackgroundColor3 = Color3.fromRGB(22, 22, 22)
    TweenService:Create(Tab,TweenInfo.new(0.15,Enum.EasingStyle.Linear,Enum.EasingDirection.Out,0,false),{Size = UDim2.new(0, 121,0, 31)}):Play()
    wait(0.15)
    TweenService:Create(Tab,TweenInfo.new(0.15,Enum.EasingStyle.Linear,Enum.EasingDirection.Out,0,false),{Size = UDim2.new(0, 127, 0, 35)}):Play()
    wait(0.15)
    for i , v in pairs(PageContainer:GetChildren()) do
        v.Visible = false
    end
    Page.Visible = true
end)
PageContainer.Name = "PageContainer"
PageContainer.Parent = Main

Page.Name = TabName .. "Page"
Page.Parent = PageContainer
Page.BackgroundColor3 = Color3.fromRGB(35, 35, 35)
Page.BorderSizePixel = 0
Page.Position = UDim2.new(0.348088533, 0, 0.118749999, 0)
Page.Size = UDim2.new(0, 315, 0, 275)
Page.Visible = false
if IsMainPage == true then
    Page.Visible = true
end
Display.Name = "Display"
Display.Parent = Page
Display.Active = true
Display.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
Display.BackgroundTransparency = 1.000
Display.BorderSizePixel = 0
Display.Position = UDim2.new(0, 0, 0.0255265664, 0)
Display.Size = UDim2.new(0, 315, 0, 267)
Display.ScrollBarThickness = 0

DisplayListLayout.Name = "DisplayListLayout"
DisplayListLayout.Parent = Display
DisplayListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center
DisplayListLayout.SortOrder = Enum.SortOrder.LayoutOrder
DisplayListLayout.Padding = UDim.new(0, 5)

DisplayListLayout:GetPropertyChangedSignal("AbsoluteContentSize"):Connect(function()
    Display.CanvasSize = UDim2.new(0,0,0,DisplayListLayout.AbsoluteContentSize.Y)
end)

end

local Components = {}

function Components:CreateButton(ButtonName,Callback)
    Callback = Callback or function () end
    ButtonName = ButtonName or "Button"
    local Button = Instance.new("TextButton")

    Button.Name = ButtonName
Button.Parent = Display
Button.BackgroundColor3 = Color3.fromRGB(15, 15, 15)
Button.BorderSizePixel = 0
Button.Position = UDim2.new(0.0222222153, 0, 0.152727276, 0)
Button.Size = UDim2.new(0, 301, 0, 37)
Button.Font = Enum.Font.SourceSansBold
Button.TextColor3 = Color3.fromRGB(255, 255, 255)
Button.TextSize = 26.000
Button.TextWrapped = true
Button.Text = ButtonName

Button.MouseButton1Click:Connect(function ()
    pcall(Callback)
end)

end

function Components:CreateLabel(LabelName)
    
local Label = Instance.new("TextLabel")

Label.Name = LabelName
Label.Parent = Display
Label.BackgroundColor3 = Color3.fromRGB(56, 56, 56)
Label.BorderColor3 = Color3.fromRGB(27, 42, 53)
Label.BorderSizePixel = 0
Label.Position = UDim2.new(0.362173051, 0, 0.425000012, 0)
Label.Size = UDim2.new(0, 300, 0, 30)
Label.Font = Enum.Font.SourceSansBold
Label.TextColor3 = Color3.fromRGB(255, 255, 255)
Label.TextSize = 24.000
Label.Text = LabelName
end

function Components:CreateSlider(SliderName,minvalue,maxvalue,callback)
SliderName = SliderName or "Slider"
minvalue = minvalue or 16
maxvalue = maxvalue or 100000
callback = callback or function() end

local Slider = Instance.new("Frame")
local Name = Instance.new("TextLabel")
local MinAndMax = Instance.new("TextLabel")
local MainSlider = Instance.new("TextButton")
local Background = Instance.new("Frame")

Slider.Name = SliderName
Slider.Parent = Display
Slider.BackgroundColor3 = Color3.fromRGB(15, 15, 15)
Slider.BorderSizePixel = 0
Slider.Position = UDim2.new(0.362173051, 0, 0.621874988, 0)
Slider.Size = UDim2.new(0, 298, 0, 38)

Name.Name = "Name"
Name.Parent = Slider
Name.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
Name.BackgroundTransparency = 1.000
Name.BorderSizePixel = 0
Name.Position = UDim2.new(0.0235690232, 0, 0, 0)
Name.Size = UDim2.new(0, 231, 0, 20)
Name.Font = Enum.Font.SourceSansBold
Name.Text = SliderName
Name.TextColor3 = Color3.fromRGB(255, 255, 255)
Name.TextSize = 21.000
Name.TextWrapped = true
Name.TextXAlignment = Enum.TextXAlignment.Left

MinAndMax.Name = "MinAndMax"
MinAndMax.Parent = Slider
MinAndMax.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
MinAndMax.BackgroundTransparency = 1.000
MinAndMax.BorderSizePixel = 0
MinAndMax.Position = UDim2.new(0.801346779, 0, 0, 0)
MinAndMax.Size = UDim2.new(0, 59, 0, 20)
MinAndMax.Font = Enum.Font.SourceSansBold
MinAndMax.Text = "0"
MinAndMax.TextColor3 = Color3.fromRGB(255, 255, 255)
MinAndMax.TextSize = 18.000
MinAndMax.TextWrapped = true
MinAndMax.TextXAlignment = Enum.TextXAlignment.Left

MainSlider.Name = "MainSlider"
MainSlider.Parent = Slider
MainSlider.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
MainSlider.BorderSizePixel = 0
MainSlider.Position = UDim2.new(0, 0, 0.689999998, 0)
MainSlider.Size = UDim2.new(0, 297, 0, 5)
MainSlider.Font = Enum.Font.SourceSans
MainSlider.Text = ""
MainSlider.TextColor3 = Color3.fromRGB(0, 0, 0)
MainSlider.TextSize = 14.000
MainSlider.AutoButtonColor = false

Background.Name = "Background"
Background.Parent = MainSlider
Background.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
Background.BorderSizePixel = 0
Background.Position = UDim2.new(0, 0, -0.0394737124, 0)
Background.Size = UDim2.new(0, 297, 0, 5)


-----Variables-----
local mouse = cloneref(game:GetService('Players')).LocalPlayer:GetMouse()
local uis = cloneref(game:GetService("UserInputService"))
local Value;


MinAndMax.Text = maxvalue
-----Main Code-----

MainSlider.MouseButton1Down:Connect(function()
	Value = (((tonumber(maxvalue) - tonumber(minvalue)) / 297) * Background.AbsoluteSize.X) + tonumber(minvalue) or 0
	Background.Size = UDim2.new(0, math.clamp(mouse.X - Background.AbsolutePosition.X, 0, 297), 0, 5)
    pcall(function()
		callback(Value)
	end)
	moveconnection = mouse.Move:Connect(function()
		Value = (((tonumber(maxvalue) - tonumber(minvalue)) / 297) * Background.AbsoluteSize.X) + tonumber(minvalue)
		Background.Size = UDim2.new(0, math.clamp(mouse.X - Background.AbsolutePosition.X, 0, 297), 0, 5)
        MinAndMax.Text = string.format("%.2f", Value) -- Display value with 2 decimal places
        pcall(function()
			callback(Value)
		end)
	end)
	releaseconnection = uis.InputEnded:Connect(function(Mouse)
		if Mouse.UserInputType == Enum.UserInputType.MouseButton1 then
			Value = (((tonumber(maxvalue) - tonumber(minvalue)) / 297) * Background.AbsoluteSize.X) + tonumber(minvalue)
			Background.Size = UDim2.new(0, math.clamp(mouse.X - Background.AbsolutePosition.X, 0, 297), 0, 5)
            MinAndMax.Text = string.format("%.2f", Value) -- Display value with 2 decimal places
            pcall(function()
				callback(Value)
			end)
			moveconnection:Disconnect()
			releaseconnection:Disconnect()
		end
	end)
end)

end

function Components:CreateDropdown(DropdownName,List,Callback)
    DropdownName = DropdownName or "Dropdown"
    List = List or {}
    Callback = Callback or function() end
    local DropdownOn = false
    local Dropdown = Instance.new("Frame")
    local DropdownTitle = Instance.new("TextLabel")
    local DropButton = Instance.new("ImageButton")
    local DropdownContainer = Instance.new("Frame")
    local ListLayout = Instance.new("UIListLayout")

    Dropdown.Name = DropdownName
    Dropdown.Parent = Display
    Dropdown.BackgroundColor3 = Color3.fromRGB(6, 6, 6)
    Dropdown.BorderSizePixel = 0
    Dropdown.Position = UDim2.new(0.0238095243, 0, 0.232209742, 0)
    Dropdown.Size = UDim2.new(0, 300, 0, 30)

    DropdownTitle.Name = DropdownName
    DropdownTitle.Parent = Dropdown
    DropdownTitle.BackgroundColor3 = Color3.fromRGB(6, 6, 6)
    DropdownTitle.BorderColor3 = Color3.fromRGB(27, 42, 53)
    DropdownTitle.BorderSizePixel = 0
    DropdownTitle.Size = UDim2.new(0, 300, 0, 30)
    DropdownTitle.Font = Enum.Font.SourceSansBold
    DropdownTitle.Text = DropdownName
    DropdownTitle.TextColor3 = Color3.fromRGB(255, 255, 255)
    DropdownTitle.TextSize = 24.000
    DropdownTitle.TextXAlignment = Enum.TextXAlignment.Left


    DropdownContainer.Name = "DropdownContainer"
    DropdownContainer.Parent = DropdownTitle
    DropdownContainer.Active = true
    DropdownContainer.BackgroundColor3 = Color3.fromRGB(6, 6, 6)
    DropdownContainer.BackgroundTransparency = 1.000
    DropdownContainer.BorderSizePixel = 0
    DropdownContainer.ClipsDescendants = true
    DropdownContainer.Position = UDim2.new(0, 0, 1, 0)
    DropdownContainer.Size = UDim2.new(0, 300, 0, 0)
    DropdownContainer.Visible = false
    
    ListLayout.Name = "ListLayout"
    ListLayout.Parent = DropdownContainer
    ListLayout.SortOrder = Enum.SortOrder.LayoutOrder
    ListLayout.Padding = UDim.new(0, 4)

    DropButton.Name = "DropButton"
    DropButton.Parent = DropdownTitle
    DropButton.BackgroundTransparency = 1.000
    DropButton.Position = UDim2.new(0.909999967, 0, 0.0666666627, 0)
    DropButton.Size = UDim2.new(0, 25, 0, 25)
    DropButton.SizeConstraint = Enum.SizeConstraint.RelativeYY
    DropButton.ZIndex = 2
    DropButton.Image = "rbxassetid://3926307971"
    DropButton.ImageRectOffset = Vector2.new(324, 364)
    DropButton.ImageRectSize = Vector2.new(36, 36)
    DropButton.ScaleType = Enum.ScaleType.Fit

DropButton.MouseButton1Click:Connect(function ()
    DropdownOn = not DropdownOn
    if DropdownOn == true  then 
        DropdownContainer.Visible = true
        TweenService:Create(DropdownContainer,TweenInfo.new(0.4),{Size = UDim2.new(0,300,0,ListLayout.AbsoluteContentSize.Y + 39)}):Play()
        TweenService:Create(Dropdown,TweenInfo.new(0.4),{Size = UDim2.new(0,300,0,ListLayout.AbsoluteContentSize.Y + 39)}):Play()
    elseif DropdownOn == false  then
        TweenService:Create(Dropdown,TweenInfo.new(0.4),{Size = UDim2.new(0,300,0,30)}):Play()
        TweenService:Create(DropdownContainer,TweenInfo.new(0.4),{Size = UDim2.new(0,300,0,0)}):Play()
    end
end)


for i , vv in pairs(List) do
    local ItemButton = Instance.new("TextButton")
    ItemButton.Name = "ItemButton"
    ItemButton.Parent = DropdownContainer
    ItemButton.BackgroundColor3 = Color3.fromRGB(25, 25, 25)
    ItemButton.BorderSizePixel = 0
    ItemButton.Size = UDim2.new(0, 300, 0, 28)
    ItemButton.Font = Enum.Font.SourceSansBold
    ItemButton.TextColor3 = Color3.fromRGB(255, 255, 255)
    ItemButton.TextSize = 19.000
ItemButton.Text = vv
ItemButton.MouseButton1Click:Connect(function()
    debounce = true
    pcall(Callback,vv)
    DropdownTitle.Text = DropdownName .. ": ".. vv
end)
end

end

function Components:CreateToggle(ToggleName,Callback)
    ToggleName = ToggleName or "Toggle"
    Callback  = Callback or function () end
    Settings[ToggleName] = false
    local Enabled = Saves[ToggleName] and true or Settings[ToggleName] or false


    local Toggle = Instance.new("TextButton")
local Color = Instance.new("Frame")
Toggle.Name = ToggleName
Toggle.Parent = Display
Toggle.BackgroundColor3 = Color3.fromRGB(15, 15, 15)
Toggle.BorderSizePixel = 0
Toggle.Position = UDim2.new(0.0604515895, 0, -0.26289773, 0)
Toggle.Size = UDim2.new(0, 301, 0, 37)
Toggle.ZIndex = 3
Toggle.Font = Enum.Font.SourceSansBold
Toggle.Text = ToggleName
Toggle.TextColor3 = Color3.fromRGB(255, 255, 255)
Toggle.TextSize = 26.000
Toggle.TextWrapped = true

Color.Name = "Color"
Color.Parent = Toggle
Color.BackgroundColor3 = Color3.fromRGB(255, 0, 0)
Color.BorderSizePixel = 0
Color.Position = UDim2.new(0, 0, 1, 0)
Color.Size = UDim2.new(0, 301, 0, 2)
Toggle.MouseButton1Click:Connect(function ()
    Enabled = not Enabled
Ui:Set(Enabled,Color,ToggleName,Callback)
spawn(function()
    pcall(Callback,Enabled)
end)
end)
Ui:Set(Enabled,Color,ToggleName,Callback)
spawn(function()
pcall(Callback,Enabled)
end)
end

return Components
    end
    return InsideUi
end 
return Ui
