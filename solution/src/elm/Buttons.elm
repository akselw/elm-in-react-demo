port module Buttons exposing (main)

import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)


port updateCount : Int -> Cmd msg


port countUpdated : (Int -> msg) -> Sub msg


type alias Flags =
    { count : Int
    }


main =
    Html.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


init : Flags -> ( Model, Cmd Msg )
init flags =
    ( flags.count, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch [ countUpdated CountUpdated ]



-- MODEL


type alias Model =
    Int



-- UPDATE


type Msg
    = Increment
    | Decrement
    | CountUpdated Int


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment ->
            ( model, updateCount (model + 1) )

        Decrement ->
            ( model, updateCount (model - 1) )

        CountUpdated count ->
            ( count, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model) ]
        , button [ onClick Increment ] [ text "+" ]
        ]
