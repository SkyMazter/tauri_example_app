use futures::{SinkExt, StreamExt};
// use tokio::sync::mpsc;
use tokio_tungstenite::connect_async;
use tokio_tungstenite::tungstenite::Message;
use tungstenite::client::IntoClientRequest;

pub async fn run_ws_client() {
    let url = "ws://localhost:9001".into_client_request().unwrap();
    let (stream, _response) = match connect_async(url).await {
        Ok(stream) => stream,
        Err(e) => {
            eprintln!("WebSocket Handshake Failed: {}", e);
            return;
        }
    };

    println!("New Websocket Connection established");

    let (mut ws_sender, mut ws_reciever) = stream.split();

    // let (tx, mut rx) = mpsc::unbounded_channel::<Message>();

    let message = Message::from("DeezNuts");

    if let Err(e) = ws_sender.send(message).await {
        eprintln!("Error sending message: {:?}", e);
    }

    if let Some(Ok(response)) = ws_reciever.next().await {
        println!("Response: {}", response)
    }
}
